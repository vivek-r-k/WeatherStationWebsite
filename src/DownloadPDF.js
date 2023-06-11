import { useState, useEffect } from 'react';
import { PDFDocument, rgb } from 'pdf-lib';

import { getDatabase, ref, onValue} from "firebase/database";
import { initializeApp } from 'firebase/app';

import 'firebase/database';

const DownloadPdf = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAqDR3NJeLqOX6HK1Rv-2jkpigIBAQFZ2Q",
    authDomain: "kletech-weather-station-bb2e2.firebaseapp.com",
    databaseURL: "https://kletech-weather-station-bb2e2-default-rtdb.firebaseio.com",
    projectId: "kletech-weather-station-bb2e2",
    storageBucket: "kletech-weather-station-bb2e2.appspot.com",
    messagingSenderId: "11409016606",
    appId: "1:11409016606:web:68ef74cdb27fdc1a21eb0f"
  };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      
    
  const [pdf, setPdf] = useState(null);

  const fetchRecentData = async () => {
    const database = getDatabase();

    const snapshot = await database.ref('/SoECE').once('value');
    const data = snapshot.val();

    // Extract the latest week's data
    const now = Date.now() / 1000; // Convert to seconds
    const oneWeekAgo = now - 604800; // One week = 604800 seconds
    const recentData = {};

    Object.keys(data).forEach((timestamp) => {
        if (timestamp >= oneWeekAgo && timestamp <= now) {
        recentData[timestamp] = data[timestamp];
        }
    });

    return recentData;
  };


  const generatePdf = async () => {
    const recentData = await fetchRecentData();
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();

    const table = [
      ['Date', 'Data 1', 'Data 2', 'Data 3'],
      ...recentData.map(item => [item.date, item.data1, item.data2, item.data3]),
    ];
    const tableWidth = 500;
    const cellPadding = 10;
    const cellWidth = tableWidth / table[0].length;
    const tableHeight = table.length * (cellWidth + cellPadding) + cellPadding;
    const tableX = 50;
    const tableY = page.getHeight() - tableHeight - 100;
    const tableColor = rgb(0.85, 0.85, 0.85);

    page.drawRectangle({
      x: tableX,
      y: tableY,
      width: tableWidth,
      height: tableHeight,
      color: tableColor,
    });

    table.forEach((row, rowIndex) => {
      row.forEach((cell, cellIndex) => {
        const textX = tableX + cellIndex * cellWidth + cellPadding;
        const textY = tableY - (rowIndex + 1) * (cellWidth + cellPadding);
        page.drawText(cell.toString(), { x: textX, y: textY, size: 12 });
      });
    });

    const pdfBytes = await pdfDoc.save();
    setPdf(pdfBytes);
  };

  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob([pdf], { type: 'application/pdf' }));
    link.download = 'recent-data.pdf';
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div>
      <button onClick={generatePdf}>Download PDF</button>
      {pdf && <button onClick={downloadPdf}>Save PDF</button>}
    </div>
  );
}

export default DownloadPdf;
