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
    <div className="rockets">
      {
        rockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            id={rocket.id}
            img_src={rocket.image[0]}
            name={rocket.name}
            description={rocket.description}
            reserved={rocket.reserved}
          />
        ))
      }
    </div>
  );
}

export default Rockets;
