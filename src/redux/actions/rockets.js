import { FETCH_ALL_ROCKETS } from './actionTypes';
import * as api from '../../api/api';

const filterData = (data) => {
  const filteredData = data.map((rocket) => {
    const {
      id, rocket_name: name, rocket_type: type, flickr_images: image, description,
    } = rocket;
    return {
      id, name, type, image, description,
    };
  });

  return filteredData;
};

// API action creators
const getRockets = () => async (dispatch) => {
  try {
    const data = await api.fetchRockets();

    dispatch({ type: FETCH_ALL_ROCKETS, payload: filterData(data) });
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getRockets;
