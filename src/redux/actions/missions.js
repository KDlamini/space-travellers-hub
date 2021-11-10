import { FETCH_ALL_MISSIONS } from './actionTypes';
import { JOIN_MISSION } from './actionTypes';

const addMission = (payload) => ({
  type: FETCH_ALL_MISSIONS,
  payload,
});

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export default addMission;
