import React from 'react';

const Card = ({ title, temp, humidity, pressure, gas, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-title">{title}</div>
      <div className="card-data">
        <div>Temperature: {temp} °C</div>
        <div>Humidity: {humidity} %</div>
        <div>Air Pressure: {pressure} hPa</div>
        <div>Air Quality: {gas} ppm</div>
      </div>
    </div>
    );
};

export default Card;
