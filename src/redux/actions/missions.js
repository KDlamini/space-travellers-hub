import { FETCH_ALL_MISSIONS, JOIN_MISSION } from './actionTypes';

const addMission = (payload) => ({
  type: FETCH_ALL_MISSIONS,
  payload,
});

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

export default addMission;
