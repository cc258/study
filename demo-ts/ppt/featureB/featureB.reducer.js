export const A = 'A';
export const B = 'B';
export const C = 'C';
export const D = 'D';

export default FeatureAReducer = (state = {}, action) => {
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

export const actions = {

  getA = () => {
    return { type: A, data: 1 };
  },

  getB = () => {
    return { type: B, data: 2 };
  },

  getC = () => {
    return { type: C, data: 3 };
  },

  getD = () => {
    return { type: D, data: 4 };
  }

};
