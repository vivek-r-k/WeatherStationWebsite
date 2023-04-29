import React from 'react';
import Card from './Card';
import BottomCards from './BottomCards';

const WeekTab = ({ selectedCard, weeklyData }) => {
    return (
        <>
    <div className="week-tabs">
        <Card
            title={selectedCard}
            temp="24"
            humidity="55"
            aqi="84"
            rain="Yes"
        />
        <div className="weekly-data">
            <div>Monday: {weeklyData.monday}</div>
            <div>Tuesday: {weeklyData.tuesday}</div>
            <div>Wednesday: {weeklyData.wednesday}</div>
            <div>Thursday: {weeklyData.thursday}</div>
            <div>Friday: {weeklyData.friday}</div>
            <div>Saturday: {weeklyData.saturday}</div>
            <div>Sunday: {weeklyData.sunday}</div>
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

export default WeekTab;

