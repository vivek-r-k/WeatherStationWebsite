import React from 'react';

const Card = ({ title, temp, humidity, pressure, gas, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-title">{title}</div>
      <div className="card-data">
        <div>Temperature: {temp}°C</div>
        <div>Humidity: {humidity}%</div>
        <div>Pressure: {pressure}</div>
        <div>CO2: {gas}%</div>
      </div>
    </div>
    );
};

export default Card;
