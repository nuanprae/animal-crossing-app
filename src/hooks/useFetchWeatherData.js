import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchWeatherData = () => {
  const [city, setCity] = useState('');
  const [weatherIcon, setWeatherIcon] = useState('');
  const [weatherDescription, setWeatherDescription] = useState('');

  useEffect(() => {
    const fetchWeatherData = () => {
      try {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const apiCallResponse = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
          );
          const weatherData = apiCallResponse.data;
          setCity(weatherData.name);
          setWeatherIcon(weatherData.weather[0].icon);
          setWeatherDescription(weatherData.weather[0].description);
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchWeatherData();
  }, [city, weatherIcon, weatherDescription]);
  return { city, weatherIcon, weatherDescription };
};

export default useFetchWeatherData;
