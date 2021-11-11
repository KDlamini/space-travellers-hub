import React from 'react';
import profileRockets from './profileRockets';

function MyProfile() {
  return (
    <div className="queryresult">
      <div className="Box">
        <h2 className="Cat-Title">My Rockets</h2>
        <table className="Mission-ProfileTable">
          <tbody>
            {profileRockets}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyProfile;
