import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './Rocket';
import getRockets from '../redux/actions/rockets';

function Rockets() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  return (
    <div className="rockets-container">
      {
        rockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            id={rocket.id}
            image={rocket.flickr_images[0]}
            name={rocket.rocket_name}
            description={rocket.description}
            reserved={rocket.active}
          />
        ))
      }
    </div>
  );
}

export default Rockets;
