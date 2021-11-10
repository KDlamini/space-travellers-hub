import { FETCH_ALL_MISSIONS } from './actionTypes';
import * as api from '../../api/api';

const handleData = (data) => {
  const missions = [];

  data.forEach((mission) => {
    const allowed = ['mission_id', 'mission_name', 'description'];
    const newMission = Object.keys(mission)
      .filter((key) => allowed.includes(key))
      .reduce((obj, key) => {
        const temp = obj;
        temp[key] = mission[key];
        return temp;
      }, {});

    missions.push(newMission);
  });

  return missions;
};

// API action creators
const getMissions = () => async (dispatch) => {
  try {
    const data = await api.fetchMissions();

    dispatch({ type: FETCH_ALL_MISSIONS, payload: handleData(data) });
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getMissions;
