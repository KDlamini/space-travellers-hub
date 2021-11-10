import React from 'react';
import PropTypes from 'prop-types';
import Button from './RocketsButton';

function Rocket({
  id, image, name, description, reserved,
}) {
  return (
    <div className="rocket-card">
      <div className="img-wrapper">
        <img src={image} alt={name} className="rocket-img" />
      </div>
      <div className="rocket-info">
        <h1>{name}</h1>
        <p>
          {
            reserved
              ? <span className="badge">Reserved</span>
              : ''
          }
          {description}
        </p>
        <Button id={id} reserved={reserved} />
      </div>
    </div>
  );
}

Rocket.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  reserved: PropTypes.bool,
}.isRequired;

export default Rocket;
