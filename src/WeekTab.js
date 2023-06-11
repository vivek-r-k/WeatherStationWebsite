import React from 'react';
import Card from './Card';
import BottomCards from './BottomCards';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const WeekTab = ({ selectedCard, weeklyData, Temp, Humid, Pressure, Gas, time }) => {
    // console.log("Temp: ", Temp);
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
    //   console.log();
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
                    <th>Air Pressure</th>
                    <th>Air Quality</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(weeklyData).map(([day, data]) => (
                    <tr key={day}>
                        <td>{day}</td>
                        <td>{data.temperature} °C</td>
                        <td>{data.humidity} %</td>
                        <td>{data.pressure} hPa</td>
                        <td>{data.gas} ppm</td>
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
            timeBottom={time[0]}
            temp={Temp}
            humidity={Humid}
            aq={Gas}
            pressure={Pressure}
            />

            <BottomCards 
            timeBottom={time[1]}
            temp={23.20}
            humidity={40.40}
            aq={10.63}
            pressure={845.74}
            />
            <BottomCards 
            timeBottom={time[2]}
            temp={23.3}
            humidity={40.7}
            aq={11.09}
            pressure={845.68}
            />
            <BottomCards 
            timeBottom={time[3]}
            temp={23.2}
            humidity={40.2}
            aq={9.7}
            pressure={845.71}
            />

            <BottomCards 
            timeBottom={time[4]}
            temp={23.1}
            humidity={40.3}
            aq={10.82}
            pressure={846.33}
            />
            <BottomCards 
            timeBottom={time[5]}
            temp={23.7}
            humidity={40.2}
            aq={11.18}
            pressure={845.99}
            />

            <BottomCards 
            timeBottom={time[6]}
            temp={22.3}
            humidity={40.3}
            aq={15.76}
            pressure={848.8}
            />
            <BottomCards 
            timeBottom={time[7]}
            temp={23.2}
            humidity={40.2}
            aq={9.7}
            pressure={845.71}
            />

            <BottomCards 
            timeBottom={time[8]}
            temp={23.2}
            humidity={40.4}
            aq={10.63}
            pressure={845.74}
            />

            <BottomCards 
            timeBottom={time[9]}
            temp={23.2}
            humidity={40.2}
            aq={9.7}
            pressure={845.71}
            />

            <BottomCards 
            timeBottom={time[10]}
            temp={23.7}
            humidity={40.2}
            aq={11.18}
            pressure={845.99}
            />

            <BottomCards 
            timeBottom={time[11]}
            temp={28.7}
            humidity={42.1}
            aq={10.63}
            pressure={912.74}
            />

            <BottomCards 
            timeBottom={time[12]}
            temp={22.3}
            humidity={40.3}
            aq={15.76}
            pressure={848.8}
            />

            <BottomCards 
            timeBottom={time[13]}
            temp={23.2}
            humidity={40.2}
            aq={9.7}
            pressure={845.71}
            />

            <BottomCards 
            timeBottom={time[14]}
            temp={23.2}
            humidity={40.4}
            aq={10.63}
            pressure={845.74}
            />
            <BottomCards 
            timeBottom={time[15]}
            temp={23.2}
            humidity={40.4}
            aq={10.63}
            pressure={845.74}
            />

            <BottomCards 
            timeBottom={time[16]}
            temp={23.1}
            humidity={40.3}
            aq={10.82}
            pressure={846.33}
            />
            <BottomCards 
            timeBottom={time[17]}
            temp={23.7}
            humidity={40.2}
            aq={11.18}
            pressure={845.99}
            />

            <BottomCards 
            timeBottom={time[18]}
            temp={22.3}
            humidity={40.3}
            aq={15.76}
            pressure={848.8}
            />
            <BottomCards 
            timeBottom={time[19]}
            temp={23.2}
            humidity={40.4}
            aq={10.63}
            pressure={845.74}
            />

            <BottomCards 
            timeBottom={time[20]}
            temp={23.2}
            humidity={40.4}
            aq={10.63}
            pressure={845.74}
            />

            <BottomCards 
            timeBottom={time[21]}
            temp={23.2}
            humidity={40.2}
            aq={9.7}
            pressure={845.71}
            />
            <BottomCards 
            timeBottom={time[22]}
            temp={23.7}
            humidity={40.2}
            aq={11.18}
            pressure={845.99}
            />
            <BottomCards 
            timeBottom={time[23]}
            temp={28.7}
            humidity={42.1}
            aq={10.63}
            pressure={912.74}
            />
            
        </div>
    </div>

    </>

    );
};

export default WeekTab;

