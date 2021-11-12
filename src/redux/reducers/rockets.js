/* eslint-disable no-case-declarations */
import { FETCH_ALL_ROCKETS } from '../actions/actionTypes';

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

    default:
      return state;
  }
};

export default rockets;
