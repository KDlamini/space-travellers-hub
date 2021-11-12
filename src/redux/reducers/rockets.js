/* eslint-disable no-case-declarations */
import { FETCH_ALL_ROCKETS, RESERVE_ROCKET } from '../actions/actionTypes';

const rockets = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_ROCKETS:
      const filtered = action.payload.map((rocket) => {
        const {
          id, rocket_name: name, rocket_type: type, flickr_images: image, description,
        } = rocket;
        return {
          id, name, type, image, description,
        };
      });

      return [...state, ...filtered];

    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== parseInt(action.payload, 10)) {
          return rocket;
        }
        return { ...rocket, reserved: !rocket.reserved };
      });

    default:
      return state;
  }
};

export default rockets;
