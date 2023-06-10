import React from 'react';
import Card from './Card';
import BottomCards from './BottomCards';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const WeekTab = ({ selectedCard, weeklyData, Temp, Humid, Pressure, Gas }) => {
    function generatePdf(selectedCard) {
        // Define the columns for the table
        const columns = [
          { header: 'Day', dataKey: 'day' },
          { header: 'Temperature', dataKey: 'temperature' },
          { header: 'Humidity', dataKey: 'humidity' },
          { header: 'Pressure', dataKey: 'pressure' },
          { header: 'Gas', dataKey: 'gas' },
        ];
      
        // Extract the data from the weeklyData object
        const data = Object.keys(weeklyData).map((day) => ({
          day,
          ...weeklyData[day],
        }));
      
        // Initialize the PDF document
        const doc = new jsPDF();
      
        // Add the default content to the PDF
        doc.setFontSize(18);
        doc.text('KLETech Weather Station', doc.internal.pageSize.getWidth() / 2, 20, { align: 'center', underline: true, fontWeight: 'bold' });
        doc.setFontSize(16);
        doc.text(selectedCard, doc.internal.pageSize.getWidth() / 2, 30, { align: 'center', underline: true, fontWeight: 'bold' });
        doc.setFontSize(14);
        doc.text('Week Report', doc.internal.pageSize.getWidth() / 2, 40, { align: 'center', underline: true, fontWeight: 'bold' });
      
        // Add the table to the PDF
        doc.autoTable({
          head: [columns.map((column) => column.header)],
          body: data.map((row) => columns.map((column) => row[column.dataKey])),
          startY: 50,
        });
      
        // Download the PDF
        doc.save(`${selectedCard}-weekly-weather-report.pdf`);
    }
      
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
                        <td>{data.gas}ppm {console.log(typeof(selectedCard))}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>

    <div>
        <button onClick={() => generatePdf(selectedCard)}>Download PDF</button>
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

