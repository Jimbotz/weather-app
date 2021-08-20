import React from 'react'

export const WeatherWithLatandLonScreen = ({ weatherWithLatandLon }) => {
    return (
        <>
            {/* <div className="card text-white bg-success   mb-3 mt-3  animate__animated animate__fadeIn">
                <div className="">
                    <div className="card-header">{weatherWithLatandLon.name}, {weatherWithLatandLon.sys.country}</div>
                </div>
                <div className="card-body">
                    <div className="card-title">
                        {Math.round(weatherWithLatandLon.main.temp).toFixed() - 273}°C
                    </div>
                    <div className="card-text">{weatherWithLatandLon.weather[0].main}</div>
                    <img src={`http://openweathermap.org/img/wn/${weatherWithLatandLon.weather[0].icon}@2x.png`} alt="img" />

                </div>
            </div> */}
            <div className="cards animate__animated animate__fadeIn">
                <div className="card card-1">
                    <div className="card__icon">
                        <img className="weather_image" src={`http://openweathermap.org/img/wn/${weatherWithLatandLon.weather[0].icon}@2x.png`} alt="img" />
                    </div>
                    <h2 className="card__title">{weatherWithLatandLon.name}, {weatherWithLatandLon.sys.country}</h2>
                    <span className="spn"></span>
                    <h3 className="card__temp">
                        {Math.round(weatherWithLatandLon.main.temp).toFixed() - 273}°C
                    </h3>
                    <h3 className="card__status">{weatherWithLatandLon.weather[0].main}</h3>
                </div>
            </div>
        </>
    )
}
