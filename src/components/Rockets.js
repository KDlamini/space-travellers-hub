import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getRockets from '../redux/actions/rockets';

function Rockets() {
  const rockets = useSelector((state) => state.rockets);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!rockets.length) {
      dispatch(getRockets());
    }
  }, []);

  return (
    <div className="rockets" />
  );
}

export default Rockets;
