import React, { useState } from 'react';
import './App.css';
import Card from './Card';
import WeekTab from './WeekTab';
import TenDaysTab from './TenDaysTab';
import logo from './logo.png'

import BackgroundImage from './background-image.png'

function App() {
  const [activeTab, setActiveTab] = useState('Today');
  const [selectedCard, setSelectedCard] = useState('School of Electronics and Communication');
  const [weeklyData, setWeeklyData] = useState({
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: ''
  });
  const [tenDaysData, setTenDaysData] = useState({
    day1: '',
    day2: '',
    day3: '',
    day4: '',
    day5: '',
    day6: '',
    day7: '',
    day8: '',
    day9: '',
    day10: '',
    day11: ''
  });

  const handleCardClick = (cardTitle) => {
    setSelectedCard(cardTitle);
    setActiveTab('Week');
  }

  const handleViewTenDays = () => {
    setActiveTab('Ten Days');
  }

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  }

  return (
    <div className="App" style={{backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover',backgroundRepeat: 'no-repeat',}}>
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
              temp="43"
              humidity="55"
              aqi="84"
              rain="Yes"
              onClick={() => handleCardClick('School of Electronics and Communication')}
            />
            <Card
              title="Main Building"
              temp="25"
              humidity="58"
              aqi="92"
              rain="No"
              onClick={() => handleCardClick('Main Building')}
            />
            <Card
              title="LHC Building"
              temp="23"
              humidity="50"
              aqi="76"
              rain="Yes"
              onClick={() => handleCardClick('LHC Building')}
            />
          </div>
        }
        {activeTab === 'Week' &&
          <WeekTab
            selectedCard={selectedCard}
            weeklyData={weeklyData}
          />
        }
        {activeTab === 'Ten Days' &&
          <TenDaysTab
            selectedCard={selectedCard}
            tenDaysData={tenDaysData}
          />
        }
      </div>

    </div>
  );
}

export default App;
