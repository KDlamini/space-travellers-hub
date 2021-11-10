import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as api from '../api/api';
import MissionCard from './MissionCard';
import './Missions.css';
import addMission from '../redux/actions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const missionList = useSelector((state) => state.missions);

  const getMissions = () => (dispatch) => {
    api.fetchMissions()
      .then((data) => data.forEach((mission) => {
        const allowed = ['mission_id', 'mission_name', 'description'];
        const newMission = Object.keys(mission)
          .filter((key) => allowed.includes(key))
          .reduce((obj, key) => {
            const temp = obj;
            temp[key] = mission[key];
            return temp;
          }, {});
        dispatch(addMission(newMission));
      }));
  };

  useEffect(() => {
    if (!missionList.length) {
      dispatch(getMissions());
    }
  }, []);

  return (
    <div className="Table-Container">
      <table className="Mission-Table">
        <tr>
          <th className="Table-Content Mission">Mission</th>
          <th className="Table-Content Description">Description</th>
          <th className="Table-Content Status">Status</th>
          <th className="Table-Content Empty">&nbsp;</th>
        </tr>
        <MissionCard />
      </table>
    </div>
  );
};

export default Missions;
