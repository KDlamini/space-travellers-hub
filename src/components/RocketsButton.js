import React from 'react';
import PropTypes from 'prop-types';
import './Rockets.css';

function Button({ id, reserved }) {
  return (
    <>
      {
        reserved
          ? <button id={id} type="button" className="reserved">Cancel Reservation</button>
          : <button id={id} type="button" className="not-reserved">Reserve Rocket</button>
      }
    </>
  );
}

Button.propTypes = {
  id: PropTypes.number,
  reserved: PropTypes.bool,
}.isRequired;

export default Button;
