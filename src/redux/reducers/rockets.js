import { FETCH_ALL_ROCKETS, RESERVE_ROCKET, CANCEL_RESERVATION } from '../actions/actionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_ROCKETS:
      return action.payload;

    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id === parseInt(action.payload, 10)) {
          return { ...rocket, reserved: true };
        }
        return { ...rocket };
      });

    case CANCEL_RESERVATION:
      return state.map((rocket) => {
        if (rocket.id === parseInt(action.payload, 10)) {
          return { ...rocket, reserved: false };
        }
        return { ...rocket };
      });

    default:
      return state;
  }
};

export default reducer;
