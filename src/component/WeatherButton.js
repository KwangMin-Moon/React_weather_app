import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = () => {
  return (
    <div>
      <Button variant='warning' className='weather-button'>
        Current Location
      </Button>
      <Button variant='warning' className='weather-button'>
        Paris
      </Button>
      <Button variant='warning' className='weather-button'>
        NewYork
      </Button>
    </div>
  );
};

export default WeatherButton;
