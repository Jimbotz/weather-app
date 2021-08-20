const api = {
  key: "92d12b4e7db76acecdf7384cc34f0ac0",
  base: "https://api.openweathermap.org/data/2.5/",
}

//Por ciudad
export const startSearch = (e, city, setWeather, setCity) => {
  if (e.key === "Enter") {
    fetch(`${api.base}weather?q=${city}&appid=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setCity('');
      });
  }
}

//Por ubicación
//https://api.openweathermap.org/data/2.5/weather?lat=19.3241461&lon=-98.2103726&appid=92d12b4e7db76acecdf7384cc34f0ac0
export const startSearchLatandLon = (lat, lon, setWeatherWithLatandLon) => {
  fetch(`${api.base}weather?lat=${lat}&lon=${lon}&appid=${api.key}`)
    .then(res => res.json())
    .then( async(result) => {
      return setWeatherWithLatandLon(result)
    })
}