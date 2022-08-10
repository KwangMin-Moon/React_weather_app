import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, setCity }) => {
  console.log(cities);
  return (
    <div>
      <Button variant='warning' className='weather-button'>
        Current Location
      </Button>
      {cities.map((item) => {
        return (
          <Button
            variant='warning'
            className='weather-button'
            onClick={() => setCity(item)}
          >
            {item}
          </Button>
        );
      })}
    </div>
  );
};

export default WeatherButton;
