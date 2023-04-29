import React from 'react';

const Card = ({ title, temp, humidity, aqi, rain, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-title">{title}</div>
      <div className="card-data">
        <div>Temperature: {temp}°C</div>
        <div>Humidity: {humidity}%</div>
        <div>Air Quality Index: {aqi}</div>
        <div>Rain: {rain}%</div>
      </div>
    </div>
    );
};

export default Card;
