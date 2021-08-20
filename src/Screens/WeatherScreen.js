import React from 'react'

export const WeatherScreen = ({ weather }) => {

    return (
            <div className="cards animate__animated animate__fadeIn">
                <div className="card card-1">
                    <div className="card__icon">
                        <img className="weather_image" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="img" />
                    </div>
                    <h2 className="card__title">{weather.name}, {weather.sys.country}</h2>
                    <span className="spn"></span>
                    <h3 className="card__temp">
                        {Math.round(weather.main.temp).toFixed() - 273}°C
                    </h3>
                    <h3 className="card__status">{weather.weather[0].main}</h3>
                </div>
            </div>  
    )
}

