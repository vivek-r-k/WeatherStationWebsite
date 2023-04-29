import React from 'react';

const BottomCards = ({ temp, humidity, aqi }) => {
  return (
    <div className="scroll-item">
        12:00 PM <br />
        {temp}°C <br />
        {humidity}% <br />
        {aqi} ppm<br />
        </div>
    );
};

export default BottomCards;
