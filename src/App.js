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
  const database = getDatabase();
  
  // SoECE
    //   For recent data
    const [humidityValue1, setHumidityValue1] = useState(null);
    const [temperatureValue1, setTemperatureValue1] = useState(null);
    const [pressure1, setPressure1] = useState(null);
    const [gas1, setGas1] = useState(null);
  
    const [date,setDate] = useState(null);
  
    const SoECE_REF = ref(database, '/SoECE/')

    useEffect(() => {
      const unsubscribe = onValue(SoECE_REF, (snapshot) => {
        const data = snapshot.val();
        // console.log("data: ", data);
        const timestamps = Object.keys(data);
        const lastTimestamp = timestamps[timestamps.length - 1];
        const lastObject = data[lastTimestamp];
        
        const next = Object.keys(lastObject)[0]
        // console.log(lastTimestamp);
        const humid = lastObject[next].Humidity
        const temp = lastObject[next].Temperature
        const press_ure = lastObject[next].Pressure
        const ga_s = lastObject[next].MQ135_PPM
        
        setTemperatureValue1(temp)
        setHumidityValue1(humid)
        setPressure1(press_ure)
        setGas1(ga_s)

        const currentDateTime = new Date();
        const prev = new Date();
        const dateee = [];
        for (var i = 0; i < 24; i++) {
          prev.setHours(currentDateTime.getHours() - i);
          const formattedHour1 = prev.toLocaleString('en-US', {
            hour: 'numeric',
            hour12: true
          });
          dateee.push(formattedHour1);
        }
        setDate(dateee);
      })

      return () => unsubscribe()
    }, [])
  
      // Lhc
      //   For recent data
    const [humidityValue2, setHumidityValue2] = useState(null);
    const [temperatureValue2, setTemperatureValue2] = useState(null);
    const [pressure2, setPressure2] = useState(null);
    const [gas2, setGas2] = useState(null);
  
    const LHC_REF = ref(database, '/LHC/');
    useEffect(() => {
      const unsubscribe = onValue(LHC_REF, (snapshot) => {
        const data = snapshot.val();
        const timestamps = Object.keys(data);
        const lastTimestamp = timestamps[timestamps.length - 1];
        const lastObject = data[lastTimestamp];
        
        const next = Object.keys(lastObject)[0]
        // console.log(lastTimestamp);
        const humid = lastObject[next].Humidity
        const temp = lastObject[next].Temperature
        const press_ure = lastObject[next].Pressure
        const ga_s = lastObject[next].MQ135_PPM
        
        setTemperatureValue2(temp)
        setHumidityValue2(humid)
        setPressure2(press_ure)
        setGas2(ga_s)
      })
      return () => unsubscribe()
    }, [])
  
      // Main building
      //   For recent data
    const [humidityValue3, setHumidityValue3] = useState(null);
    const [temperatureValue3, setTemperatureValue3] = useState(null);
    const [pressure3, setPressure3] = useState(null);
    const [gas3, setGas3] = useState(null);
  
    const MainBuilding_Ref = ref(database, '/MainBuilding/');

    useEffect(() => {
      const unsubscribe = onValue(MainBuilding_Ref, (snapshot) => {
        const data = snapshot.val();
        const timestamps = Object.keys(data);
        const lastTimestamp = timestamps[timestamps.length - 1];
        const lastObject = data[lastTimestamp];
        
        const next = Object.keys(lastObject)[0]
        // console.log(lastTimestamp);
        const humid = lastObject[next].Humidity
        const temp = lastObject[next].Temperature
        const press_ure = lastObject[next].Pressure
        const ga_s = lastObject[next].MQ135_PPM
        
        setTemperatureValue3(temp)
        setHumidityValue3(humid)
        setPressure3(press_ure)
        setGas3(ga_s)
      })
      return () => unsubscribe()
    }, []);

  // ------------------------------------------------------------------------------------
  const [humidityValue, setHumidityValue] = useState(null);
  const [tempValue, setTempValue] = useState(null);
  const [pressureValue, setPressureValue] = useState(null);
  const [gasValue, setGasValue] = useState(null);

  const [activeTab, setActiveTab] = useState('Today');
  const [selectedCard, setSelectedCard] = useState('School of Electronics and Communication');
  const [weeklyData, setWeeklyData] = useState({
    Monday: { temperature: 33, humidity: 69, pressure: 971.37, gas: 405.37 },
    Tuesday: { temperature: 35, humidity: 67, pressure: 981.85, gas: 395.12 },
    Wednesday: { temperature: 37, humidity: 67, pressure: 981.13, gas: 396.35 },
    Thursday: { temperature: 30, humidity: 60, pressure: 951.07, gas: 383.36 },
    Friday: { temperature: 36, humidity: 66, pressure: 992.43, gas: 412.07 },
    Saturday: { temperature: 35, humidity: 69, pressure: 1021.2, gas: 408.48 },
    Sunday: { temperature: 32, humidity: 63, pressure: 958.25, gas: 388.49 }
  });
  const [tenDaysData, setTenDaysData] = useState({
    day1: {date: 'Jun 11', temperature: 32, humidity: 63, pressure: 958.25, gas: 388.49},
    day2: {date: 'Jun 10', temperature: 35, humidity: 69, pressure: 1021.2, gas: 408.48},
    day3: {date: 'Jun 09', temperature: 36, humidity: 66, pressure: 992.43, gas: 412.07},
    day3: {date: 'Jun 08', temperature: 30, humidity: 60, pressure: 951.07, gas: 383.36},
    day4: {date: 'Jun 07', temperature: 37, humidity: 67, pressure: 981.13, gas: 396.35},
    day5: {date: 'Jun 06', temperature: 35, humidity: 67, pressure: 981.85, gas: 395.12},
    day6: {date: 'Jun 05', temperature: 33, humidity: 69, pressure: 971.37, gas: 405.37},
    day7: {date: 'Jun 04', temperature: 30, humidity: 60, pressure: 951.07, gas: 383.36},
    day8: {date: 'Jun 03', temperature: 35, humidity: 69, pressure: 1021.2, gas: 408.48},
    day9: {date: 'Jun 02', temperature: 33, humidity: 69, pressure: 971.37, gas: 405.37}
  });

  const handleCardClick = (cardTitle) => {
    setSelectedCard(cardTitle);
    setActiveTab('Week');
    if (cardTitle === 'School of Electronics and Communication') {
      setHumidityValue(humidityValue1)
      setTempValue(temperatureValue1)
      setPressureValue(pressure1)
      setGasValue(gas1)
    } else if(cardTitle === 'Main Building') {
      setHumidityValue(humidityValue3)
      setTempValue(temperatureValue3)
      setPressureValue(pressure3)
      setGasValue(gas3)
    } else if(cardTitle === 'LHC Building') {
      setHumidityValue(humidityValue2)
      setTempValue(temperatureValue2)
      setPressureValue(pressure2)
      setGasValue(gas2)
    }
    console.log(humidityValue);
  }

  const handleViewTenDays = () => {
    setActiveTab('Ten Days');
  }

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setHumidityValue(humidityValue1)
      setTempValue(temperatureValue1)
      setPressureValue(pressure1)
      setGasValue(gas1)
  }
  // console.log("Date: ", date);

  return (
    <div className="App" 
    style={{backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover',backgroundRepeat: 'no-repeat',}}
    >
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
              temp={temperatureValue1}
              humidity={humidityValue1}
              pressure={pressure1}
              gas={gas1}
              onClick={() => handleCardClick('School of Electronics and Communication')}
            />
            <Card
              title="Main Building"
              temp={temperatureValue3}
              humidity={humidityValue3}
              pressure={pressure3}
              gas={gas3}
              onClick={() => handleCardClick('Main Building')}
            />
            <Card
              title="LHC Building"
              temp={temperatureValue2}
              humidity={humidityValue2}
              pressure={pressure2}
              gas={gas2}
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
            time={date}
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
            time={date}
          />
        }
      </div>

    </div>
  );
}

export default App;
