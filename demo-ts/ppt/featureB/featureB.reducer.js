import {
    A,
    B,
    C,
    D
} from "./featureA.constants";

export const FeatureAReducer = (state = {}, action) => {
  switch (action.type) {
    case A:
      return action.data;
    case B:
      return action.data;
    case C:
      return action.data;
    case D:
      return action.data;
    default:
      return state;
  }
};
