import React from 'react';
import { useSelector } from 'react-redux';
import ProfileRockets from './ProfileRockets';
import ProfileMission from './ProfileMission';
import './MyProfile.css';

function MyProfile() {
  const rockets = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.missions);

  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  const reservedMissions = missions.filter((mission) => mission.reserved === true);

  const renderList = reservedMissions.map((mission) => (
    <ProfileMission key={mission.mission_id} content={mission.mission_name} />
  ));

  const renderReservedRockets = reservedRockets.map((rocket) => (
    <ProfileRockets
      key={rocket.id}
      name={rocket.name}
    />
  ));

  return (
    <div className="queryresult">
      <div className="Box">
        <h2 className="Cat-Title">My Missions</h2>
        <table className="Mission-ProfileTable">
          <tbody>
            {renderList}
          </tbody>
        </table>
      </div>
      <div className="Box">
        <h2 className="Cat-Title">My Rockets</h2>
        <table className="Mission-ProfileTable">
          <tbody>
            {renderReservedRockets}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyProfile;
