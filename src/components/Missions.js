import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as api from '../api/api';
import addMission from '../redux/actions/missions';
import MissionCard from './MissionCard';
import './Missions.css';

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

  const myMissionsArr = missionList.map((missions) => (
    <MissionCard
      key={missions.mission_id}
      missionid={missions.mission_id}
      name={missions.mission_name}
      description={missions.description}
      reserved={missions.reserved}
    />
  ));

  return (
    <div className="Table-Container">
      <table className="Mission-Table">
        <thead>
          <tr>
            <th className="Table-Content Mission">Mission</th>
            <th className="Table-Content Description">Description</th>
            <th className="Table-Content Status">Status</th>
            <th className="Table-Content Empty">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {myMissionsArr}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
