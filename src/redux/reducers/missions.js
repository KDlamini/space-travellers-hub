import { FETCH_ALL_MISSIONS } from '../actions/actionTypes';

const filtered = [];

const missions = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_MISSIONS:
      action.payload.forEach((mission) => {
        const allowed = ['mission_id', 'mission_name', 'description'];
        const newMission = Object.keys(mission)
          .filter((key) => allowed.includes(key))
          .reduce((obj, key) => {
            const temp = obj;
            temp[key] = mission[key];
            return temp;
          }, {});

        filtered.push(newMission);
      });

      return [...state, ...filtered];
    default:
      return state;
  }
};

export default missions;
