import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetchWeatherData = () => {
  const [city, setCity] = useState('');
  const [weatherIcon, setWeatherIcon] = useState('');
  const [weatherID, setWeatherID] = useState(0);
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
          setWeatherID(weatherData.weather[0].id);
          setCity(weatherData.name);
          setWeatherIcon(`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`);
          setWeatherDescription(weatherData.weather[0].description);
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchWeatherData();
  }, []);

  return { city, weatherIcon, weatherID, weatherDescription };
};

export default useFetchWeatherData;
