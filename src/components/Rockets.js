import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getRockets from '../redux/actions/rockets';

function Rockets() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  return (
    <div className="rockets" />
  );
}

export default Rockets;
