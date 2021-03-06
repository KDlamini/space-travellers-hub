import React from 'react';
import PropTypes from 'prop-types';
import Button from './RocketsButton';
import './Rockets.css';

function Rocket({
  id, image, name, description, reserved,
}) {
  return (
    <div className="rocket-card">
      <div className="img-wrapper">
        <img src={image} alt={name} className="rocket-img" />
      </div>
      <div className="rocket-info">
        <h1 className="rocket-name">{name}</h1>
        <p className="description">
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
