import React from 'react';
import Card from './Card';
import BottomCards from './BottomCards';

const WeekTab = ({ selectedCard, weeklyData, Temp, Humid, Pressure, Gas }) => {
    return (
        <>
    <div className="week-tabs">
        <Card
            title={selectedCard}
            temp={Temp}
            humidity={Humid}
            pressure={Pressure}
            gas={Gas}
        />
        <div className="weekly-data">
            <table>
                <thead>
                    <tr>
                    <th>Day</th>
                    <th>Temperature</th>
                    <th>Humidity</th>
                    <th>Pressure</th>
                    <th>Gas</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(weeklyData).map(([day, data]) => (
                    <tr key={day}>
                        <td>{day}</td>
                        <td>{data.temperature}°C</td>
                        <td>{data.humidity}%</td>
                        <td>{data.pressure}Pa</td>
                        <td>{data.gas}ppm</td>
                    </tr>
                    ))}
                </tbody>
            </table>
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

