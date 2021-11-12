import { FETCH_ALL_MISSIONS, JOIN_MISSION, LEAVE_MISSION } from '../actions/actionTypes';

const missions = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_MISSIONS:
      return [...state, action.payload];

    case JOIN_MISSION:
    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== action.payload) {
          return mission;
        }
        return {
          ...mission,
          reserved: !mission.reserved,
        };
      });

    default:
      return state;
  }
};

export default missions;
