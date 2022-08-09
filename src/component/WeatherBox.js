import React from 'react';

const WeatherBox = ({ weather }) => {
  console.log(weather);
  return (
    <div className='weather-box'>
      <h3>{weather?.name}</h3>
      <h2>{weather?.main.temp}도</h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  );
};

export default WeatherBox;
