import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getMissions from '../redux/actions/missions';
import MissionCard from './MissionCard';
import './Missions.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missionList = useSelector((state) => state.missions);

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
