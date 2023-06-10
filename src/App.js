import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './Card';
import WeekTab from './WeekTab';
import TenDaysTab from './TenDaysTab';
import logo from './logo.png'

import BackgroundImage from './pexels-andrew-beatson-3742711.jpg'

import { getDatabase, ref, onValue} from "firebase/database";
import { initializeApp } from 'firebase/app';

function App() {
  // Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyAHlmd0M2RpO_1NvGZJjwT659Wg7R9SQqc",
    authDomain: "onelasttest-928f0.firebaseapp.com",
    databaseURL: "https://onelasttest-928f0-default-rtdb.firebaseio.com",
    projectId: "onelasttest-928f0",
    storageBucket: "onelasttest-928f0.appspot.com",
    messagingSenderId: "237242907722",
    appId: "1:237242907722:web:e4877bb17c560587d9bab3"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase();
  
  // SoECE
  const SoECERef = ref(database, '/SoECE/');
  const [humidityValue1, setHumidityValue1] = useState(null);
  const [tempValue1, setTempValue1] = useState(null);
  const [pressureValue1, setPressureValue1] = useState(null);
  const [gasValue1, setGasValue1] = useState(null);

  useEffect(() => {
    const unsubscribe = onValue(SoECERef, (snapshot) => {
      const values = snapshot.val();
      const keys = Object.keys(values).sort((a, b) => b - a); // Sort keys in descending order
      const latestKey = keys[0];
      const latestData = values[latestKey];

      const humidityValue1 = latestData.Humidity;
      const tempValue1 = latestData.Temperature;
      const pressureValue1 = latestData.Pressure;
      const gasValue1 = latestData.Gas;

      setHumidityValue1(humidityValue1);
      setTempValue1(tempValue1);
      setPressureValue1(pressureValue1);
      setGasValue1(gasValue1);
      // console.log("latestKey: ", latestKey);
    });

    return () => unsubscribe();
  }, []);
  // MainBuilding
  const MainBuildingRef = ref(database, '/MainBuilding/');
  const [humidityValue2, setHumidityValue2] = useState(null);
  const [tempValue2, setTempValue2] = useState(null);
  const [pressureValue2, setPressureValue2] = useState(null);
  const [gasValue2, setGasValue2] = useState(null);

  useEffect(() => {
    const unsubscribe = onValue(MainBuildingRef, (snapshot) => {
      const values = snapshot.val();
      const keys = Object.keys(values).sort((a, b) => b - a); // Sort keys in descending order
      const latestKey = keys[0];
      const latestData = values[latestKey];

      const humidityValue2 = latestData.Humidity;
      const tempValue2 = latestData.Temperature;
      const pressureValue2 = latestData.Pressure;
      const gasValue2 = latestData.Gas;

      setHumidityValue2(humidityValue2);
      setTempValue2(tempValue2);
      setPressureValue2(pressureValue2);
      setGasValue2(gasValue2);

    });

    return () => unsubscribe();
  }, []);
  // LHCBuilding
  const LHCBuilding = ref(database, '/LHCBuilding/');
  const [humidityValue3, setHumidityValue3] = useState(null);
  const [tempValue3, setTempValue3] = useState(null);
  const [pressureValue3, setPressureValue3] = useState(null);
  const [gasValue3, setGasValue3] = useState(null);

  useEffect(() => {
    const unsubscribe = onValue(LHCBuilding, (snapshot) => {
      const values = snapshot.val();
      const keys = Object.keys(values).sort((a, b) => b - a); // Sort keys in descending order
      const latestKey = keys[0];
      const latestData = values[latestKey];
      // console.log(latestKey);
      const humidityValue3 = latestData.Humidity;
      const tempValue3 = latestData.Temperature;
      const pressureValue3 = latestData.Pressure;
      const gasValue3 = latestData.Gas;
      setHumidityValue3(humidityValue3);
      setTempValue3(tempValue3);
      setPressureValue3(pressureValue3);
      setGasValue3(gasValue3);

    });

    return () => unsubscribe();
  }, []);

  // ------------------------------------------------------------------------------------
  const [humidityValue, setHumidityValue] = useState(null);
  const [tempValue, setTempValue] = useState(null);
  const [pressureValue, setPressureValue] = useState(null);
  const [gasValue, setGasValue] = useState(null);

  const [activeTab, setActiveTab] = useState('Today');
  const [selectedCard, setSelectedCard] = useState('School of Electronics and Communication');
  const [weeklyData, setWeeklyData] = useState({
    Monday: { temperature: 25, humidity: 60, pressure: 1008, gas: 10 },
    Tuesday: { temperature: 23, humidity: 55, pressure: 1005, gas: 8 },
    Wednesday: { temperature: 26, humidity: 50, pressure: 1007, gas: 9 },
    Thursday: { temperature: 28, humidity: 45, pressure: 1009, gas: 11 },
    Friday: { temperature: 29, humidity: 40, pressure: 1006, gas: 12 },
    Saturday: { temperature: 27, humidity: 55, pressure: 1004, gas: 7 },
    Sunday: { temperature: 24, humidity: 65, pressure: 1002, gas: 6 }
  });
  const [tenDaysData, setTenDaysData] = useState({
    day1: {date: 'Jun 10', temperature: 25, humidity: 60, pressure: 1008, gas: 10},
    day2: {date: 'Jun 9', temperature: 25, humidity: 60, pressure: 1008, gas: 10},
    day3: {date: 'Jun 8', temperature: 25, humidity: 60, pressure: 1008, gas: 10},
    day4: {date: 'Jun 7', temperature: 25, humidity: 60, pressure: 1008, gas: 10},
    day5: {date: 'Jun 6', temperature: 25, humidity: 60, pressure: 1008, gas: 10},
    day6: {date: 'Jun 5', temperature: 25, humidity: 60, pressure: 1008, gas: 10},
    day7: {date: 'Jun 4', temperature: 25, humidity: 60, pressure: 1008, gas: 10},
    day8: {date: 'Jun 3', temperature: 25, humidity: 60, pressure: 1008, gas: 10},
    day9: {date: 'Jun 2', temperature: 25, humidity: 60, pressure: 1008, gas: 10},
    day10: {date: 'Jun 1', temperature: 25, humidity: 60, pressure: 1008, gas: 10}
  });

  const handleCardClick = (cardTitle) => {
    setSelectedCard(cardTitle);
    setActiveTab('Week');
    if (cardTitle === 'School of Electronics and Communication') {
      setHumidityValue(humidityValue1)
      setTempValue(tempValue1)
      setPressureValue(pressureValue1)
      setGasValue(gasValue1)
    } else if(cardTitle === 'Main Building') {
      setHumidityValue(humidityValue2)
      setTempValue(tempValue2)
      setPressureValue(pressureValue2)
      setGasValue(gasValue2)
    } else if(cardTitle === 'LHC Building') {
      setHumidityValue(humidityValue3)
      setTempValue(tempValue3)
      setPressureValue(pressureValue3)
      setGasValue(gasValue3)
    }
    console.log(humidityValue);
  }

  const handleViewTenDays = () => {
    setActiveTab('Ten Days');
  }

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setHumidityValue(humidityValue1)
      setTempValue(tempValue1)
      setPressureValue(pressureValue1)
      setGasValue(gasValue1)
  }

  return (
    <div className="App" 
    style={{backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover',backgroundRepeat: 'no-repeat',}}
    >
    {/* <div className="App"> */}
      <header className="App-header">
        <img src={logo} alt="Logo" />
      </header>
      <div className="tabs">
        <button className={activeTab === 'Today' ? 'active' : ''} onClick={() => handleTabClick('Today')}>Today</button>
        <button className={activeTab === 'Week' ? 'active' : ''} onClick={() => handleTabClick('Week')}>Week</button>
        <button className={activeTab === 'Ten Days' ? 'active' : ''} onClick={() => handleTabClick('Ten Days')}>10 Days</button>
      </div>
      <div className="main-content">
        {activeTab === 'Today' &&
          <div className="cards-container">
            <Card
              title="School of Electronics and Communication"
              temp={tempValue1}
              humidity={humidityValue1}
              pressure={pressureValue1}
              gas={gasValue1}
              onClick={() => handleCardClick('School of Electronics and Communication')}
            />
            <Card
              title="Main Building"
              temp={tempValue2}
              humidity={humidityValue2}
              pressure={pressureValue2}
              gas={gasValue2}
              onClick={() => handleCardClick('Main Building')}
            />
            <Card
              title="LHC Building"
              temp={tempValue3}
              humidity={humidityValue3}
              pressure={pressureValue3}
              gas={gasValue3}
              onClick={() => handleCardClick('LHC Building')}
            />
          </div>
        }
        {activeTab === 'Week' &&
          <WeekTab
            selectedCard={selectedCard}
            weeklyData={weeklyData}
            Temp={tempValue}
            Gas={gasValue}
            Humid={humidityValue}
            Pressure={pressureValue}
          />
        }
        {activeTab === 'Ten Days' &&
          <TenDaysTab
            selectedCard={selectedCard}
            tenDaysData={tenDaysData}
            Temp={tempValue}
            Gas={gasValue}
            Humid={humidityValue}
            Pressure={pressureValue}
          />
        }
      </div>

    </div>
  );
}

export default App;
