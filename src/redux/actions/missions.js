import { FETCH_ALL_MISSIONS } from './actionTypes';

const addMission = (payload) => ({
  type: FETCH_ALL_MISSIONS,
  payload,
});

export default addMission;
