const rawWeatherData = {
  coord: {
    lon: 13.4054,
    lat: 55.5975,
  },
  weather: [
    {
      id: 803,
      main: 'Clouds',
      description: 'broken clouds',
      icon: 'https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F04d.png?1499366020964',
    },
  ],
  base: 'stations',
  main: {
    temp: 6.07,
    feels_like: 2,
    temp_min: 5.56,
    temp_max: 6.67,
    pressure: 1014,
    humidity: 45,
  },
  visibility: 10000,
  wind: {},
  clouds: {},
  dt: 1617885232,
  sys: {},
  timezone: 7200,
  id: 2712373,
  name: 'Genarp',
  cod: 200,
};

export const getCity = () => {
  return rawWeatherData.name;
};

export const getWeatherIcon = () => {
  return rawWeatherData.weather[0].icon;
};

export const getWeatherDescription = () => {
  return rawWeatherData.weather[0].main;
};

export const getDayNumber = () => {
  const date = new Date();
  return date.toLocaleDateString('default', { day: '2-digit' });
};

export const getMonthName = () => {
  const date = new Date();
  return date.toLocaleString('default', { month: 'long' });
};

export const getMonthNumber = () => {
  const date = new Date();
  return date.getMonth() + 1;
};

export const getTime = () => {
  const date = new Date();
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
};

// const getWeatherData = () => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition((position) => {
//       const latitude = position.coords.latitude;
//       const longitude = position.coords.longitude;
//       console.log(latitude, longitude);
//       const apiUrl = `https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`;
//       fetch(apiUrl)
//         .then((response) => response.json())
//         .then((data) => {
//           console.log(data);
//         });
//     });
//   }
// };
// getWeatherData();

export const getDailyAcnhResults = (data) => {
  const results = Object.values(data);
  const monthNumber = getMonthNumber();
  return results.filter((obj) => obj.availability['month-array-northern'].includes(monthNumber));
};
