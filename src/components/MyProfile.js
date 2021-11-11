import React from 'react';
import { useSelector } from 'react-redux';
import profileRockets from './profileRockets';
import './MyProfile.css';

function MyProfile() {
  const rockets = useSelector((state) => state.rockets);

  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className="queryresult">
      <div className="Box">
        <h2 className="Cat-Title">My Rockets</h2>
        <table className="Mission-ProfileTable">
          <tbody>
            {
              reservedRockets.map((rockets) => (
                <profileRockets
                  key={rockets.id}
                  content={rockets.name}
                />
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyProfile;
