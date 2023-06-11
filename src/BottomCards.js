import React from 'react';

const BottomCards = ({ temp, humidity, pressure, aq, timeBottom }) => {
  return (
    <div className="scroll-item">
        {timeBottom} <br />
        {temp}°C <br />
        {humidity}% <br />
        {pressure} hPa<br />
        {aq} ppm<br />
        </div>
    );
};

export default BottomCards;
