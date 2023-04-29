import React from 'react';
import Card from './Card';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="card-container">
        <Card
          title="School of Electronics and Communication"
          temp={84}
          humidity={60}
          aqi={30}
          rain={10}
        />
        <Card
          title="Main Building"
          temp={27}
          humidity={55}
          aqi={40}
          rain={5}
        />
        <Card
          title="LHC Building"
          temp={23}
          humidity={65}
          aqi={20}
          rain={15}
        />
      </div>
    </div>
  );
};

export default HomePage;
