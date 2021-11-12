import { FETCH_ALL_MISSIONS } from '../actions/actionTypes';

const missions = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_MISSIONS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default missions;
