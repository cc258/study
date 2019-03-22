import * as React from 'react';
import * as PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { PATHS } from '../../../common';
import * as privilegeResource from '../../../resources/trips';
import { storage } from '../../../services';
import { message } from 'eds-react/lib/components/message';
import DownLoadTripListDialog from '../../../app/packages/manageTrip/components/downLoadTripListDialog';
import HeaderHead from '../../../components/biz/layout/header/header-head';
import { privilegeWrapper, getAuthResult } from '../../../components/biz/privilege';

import {
  prefixCls,
  TripsListGetCount,
  TripsListDataKey,
  StartTimeKey,
  StartPositionKey,
  EndTimeKey,
  EndPositionKey,
  VinKey,
  DriverNameKey,
} from '../trips.constants';
import { PaginationData } from '../typing';
import { getTrips, getAlarm, paginationSwitch } from '../services';
import { TripsList } from '../components';
import messages from '../message';

require('../trips.scss');

const ListWrapper = privilegeWrapper(TripsList)(...privilegeResource.tripList);

const parse = val => {
  return typeof val === 'number' ? val + '' : ' ';
};

interface HeaderParams {
  [StartTimeKey]?: object;
  [StartPositionKey]?: object;
  [EndTimeKey]?: object;
  [EndPositionKey]?: object;
  [VinKey]?: object;
  [DriverNameKey]?: object;
}

interface ListParams {
  size: number;
  type: string;
}

export interface FindTripsResultProps extends FMS.BasicProps<any> {
  name?: string;
  history?: any;
}

interface FindTripsResultState {
  tripsList: Array<any>;
  pagination: PaginationData;
  listLoading: boolean;
  downloadOpen: boolean;
  selectedItems: Array<any>;
}

const initState = {
  tripsList: [],
  pagination: { pageIndex: 0, pageSize: 1, totalSize: 0 },
  listLoading: false,
  downloadOpen: false,
  selectedItems: [],
};

class FindTripsResult extends React.Component<FindTripsResultProps, FindTripsResultState> {
  private listParams: ListParams;
  private headerParams: HeaderParams;

  constructor(props) {
    super(props);

    this.listParams = {
      size: TripsListGetCount,
      type: 'mgmt',
    };
    this.headerParams = (window as any).filter;
    this.state = {
      ...initState,
    };
  }

  componentDidMount() {
    this.loadPage();
  }

  componentWillMount() {
    storage.removeItem(TripsListDataKey);
  }

  componentWillUnmount() {}

  render(): JSX.Element {
    const headerTrue = true;
    const { formatMessage } = this.context.intl;
    const { tripsList, listLoading, pagination, downloadOpen, selectedItems } = this.state;
    return (
      <div className={`fms-page ${prefixCls}`}>
        <div className={'fms-layout-header'}>
          <HeaderHead
            title={formatMessage(messages.findTripsResultTitle)}
            withGoBack={headerTrue}
            navigationMenu={headerTrue}
            onMenuClick={this.handleGoBack}
          />
        </div>
        <div className={`${prefixCls}__container fms-content`}>
          <ListWrapper
            title={<FormattedMessage {...messages.findTripsResultTitle} />}
            listLoading={listLoading}
            data={tripsList}
            pagination={pagination}
            paginationSwitch={this.paging}
            handleOpenDownload={this.handleOpenDownload}
          />
          <DownLoadTripListDialog
            open={downloadOpen}
            tripIds={selectedItems}
            closeDialog={this.handleCloseDownLoad}
            router={this.props.history}
          />
        </div>
      </div>
    );
  }

  private handleGoBack = () => {
    this.props.history.goBack();
  };

  private handleOpenDownload = ids => {
    if (this.state.downloadOpen) {
      return;
    }
    this.setState({
      downloadOpen: true,
      selectedItems: ids,
    });
  };

  private handleCloseDownLoad = () => {
    this.setState({ downloadOpen: false });
  };

  private loadPage = () => {
    this.listParams = {
      size: TripsListGetCount,
      type: 'mgmt',
    };
    if (!getAuthResult(...privilegeResource.tripList)) {
      return;
    }
    this.setState(
      {
        listLoading: true,
        tripsList: [],
      },
      () => {
        getTrips(Object.assign({}, this.listParams, this.headerParams), 1)
          .then(data => {
            this.setState({
              listLoading: false,
              tripsList: data.trips,
              pagination: data.pagination,
            });
            this.fetchAlarm(data.trips);
          })
          .catch((msg = '') => {
            this.setState({
              listLoading: false,
              tripsList: [],
              pagination: { ...initState.pagination },
            });
            message.notice(msg, { style: { position: 'fixed', bottom: '0px' } });
          });
      },
    );
  };

  private fetchAlarm = listData => {
    const payload = listData.map(item => {
      if (item.vehicleId && item.startTime) {
        return {
          vin: item.vehicleId,
          startTime: new Date(item.startTime).getTime(),
          endTime: new Date(item.endTime).getTime(),
        };
      }
      return {};
    });
    getAlarm({
      vins: payload,
    })
      .then(data => {
        const alarmData = data;
        const { tripsList } = this.state;
        let newData = tripsList.map((item, index) => {
          if (item.vehicleId && item.startTime && alarmData[index] && alarmData[index].length > 0) {
            return Object.assign({}, item, { showAlarm: true, alarmId: alarmData[index][0] });
          }
          return item;
        });
        this.setState({
          tripsList: newData,
        });
      })
      .catch((msg = '') => {
        message.notice(msg, { style: { position: 'fixed', bottom: '0px' } });
      });
  };

  private paging = (pageIndex: number, pageSize: number): void => {
    paginationSwitch(Object.assign({}, this.listParams, this.headerParams), pageIndex)
      .then(data => {
        const { listLoading, payload } = data;
        if (typeof listLoading === 'undefined') {
          this.setState({
            listLoading: false,
            tripsList: data.trips,
            pagination: data.pagination,
          });
          this.fetchAlarm(data.trips);
        } else {
          this.setState(
            {
              listLoading: true,
              tripsList: [],
            },
            () => {
              getTrips(payload, pageIndex)
                .then(res => {
                  this.setState({
                    listLoading: false,
                    tripsList: res.trips,
                    pagination: res.pagination,
                  });
                  this.fetchAlarm(res.trips);
                })
                .catch((msg = '') => {
                  this.setState({
                    listLoading: false,
                    tripsList: [],
                    pagination: { ...initState.pagination },
                  });
                  message.notice(msg, { style: { position: 'fixed', bottom: '0px' } });
                });
            },
          );
        }
      })
      .catch((msg = '') => {
        message.notice(msg, { style: { position: 'fixed', bottom: '0px' } });
      });
  };
}

(FindTripsResult as React.ComponentType<FindTripsResultProps>).contextTypes = {
  intl: PropTypes.object,
};

export default FindTripsResult;
