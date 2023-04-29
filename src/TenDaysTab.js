import React from 'react';
import Card from './Card';
import BottomCards from './BottomCards';

const TenDaysTab = ({ selectedCard, tenDaysData }) => {
    return (
        <>
    <div className="ten-dayss-tab">
        <div className="selected-card">
        <Card
            title={selectedCard}
            temp="24"
            humidity="55"
            aqi="84"
            rain="Yes"
        />
        </div>
        <div className="ten-dayss-data">
            <div>07-12-2022: {tenDaysData.day1}</div>
            <div>08-12-2022: {tenDaysData.day2}</div>
            <div>09-12-2022: {tenDaysData.day3}</div>
            <div>10-12-2022: {tenDaysData.day4}</div>
            <div>11-12-2022: {tenDaysData.day5}</div>
            <div>12-12-2022: {tenDaysData.day6}</div>
            <div>13-12-2022: {tenDaysData.day7}</div>
            <div>14-12-2022: {tenDaysData.day8}</div>
            <div>15-12-2022: {tenDaysData.day9}</div>
            <div>16-12-2022: {tenDaysData.day10}</div>
            <div>17-12-2022: {tenDaysData.day11}</div>
        </div>
    </div>

<div className="scroll-container">
<div className="scroll-content">
<BottomCards 
temp={34}
humidity={40}
aqi={10}
/>
<BottomCards 
temp={34}
humidity={40}
aqi={10}
/>
<BottomCards 
temp={34}
humidity={40}
aqi={10}
/>
<BottomCards 
temp={34}
humidity={40}
aqi={10}
/>
<BottomCards 
temp={34}
humidity={40}
aqi={10}
/>
<BottomCards 
temp={34}
humidity={40}
aqi={10}
/>
<BottomCards 
temp={34}
humidity={40}
aqi={10}
/>
<BottomCards 
temp={34}
humidity={40}
aqi={10}
/>
<BottomCards 
temp={34}
humidity={40}
aqi={10}
/>
<BottomCards 
temp={34}
humidity={40}
aqi={10}
/>
<BottomCards 
temp={34}
humidity={40}
aqi={10}
/>
<BottomCards 
temp={34}
humidity={40}
aqi={10}
/>
</div>
</div>
</>
    );
};

export default TenDaysTab;