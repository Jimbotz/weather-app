import React, { useState, } from 'react'
import { startSearch, startSearchLatandLon } from './helpers/getApi';
import { WeatherScreen } from './Screens/WeatherScreen';
import { WeatherWithLatandLonScreen } from './Screens/weatherWithLatandLonScreen';
import Swal from 'sweetalert2'
import "./styles/styles.scss"

export const WeatherApp = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState({});
    const [weatherWithLatandLon, setWeatherWithLatandLon] = useState({});
    const [lon, setLon] = useState("")
    const [lat, setLat] = useState("")

    const search = (e) => {
        startSearch(e, city, setWeather, setCity)
    }


    const successAlert = () => {
        Swal.fire({
            title: 'Do you want to activate the current location?',
            showDenyButton: true,
            showCloseButton: true,
            confirmButtonText: `Yes`,
            width: 600,
            padding: '3em',
            backdrop: `
             rgba(0,0,123,0.4)
            url("https://img1.picmix.com/output/stamp/normal/9/3/8/7/1257839_9ff86.gif")
            `
        }).then((result) => {
            if (result.isConfirmed) {
                getLocation()
            }
        })
    }

    const setPosition = (position) => {
        setLon(position.coords.longitude)
        setLat(position.coords.latitude)
        startSearchLatandLon(lat, lon, setWeatherWithLatandLon)
    }

    const showError = (error) => {
        alert(error)
    }

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 10
    };

    const getLocation = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(setPosition, showError, options)
        } else {
            alert("algo fallo")
        }
    }

    return (
        <div className="animate__animated animate__fadeIn">
            <div className="CardSearch">
                <div className="CardInner">
                    <label>Search your city to know the weather</label>
                    <div className="container">
                        <div className="Icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#657789" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                        </div>
                        <div className="InputContainer">
                            <input type="text"
                                className="form-control rounded"
                                placeholder="Search city"
                                onChange={e => setCity(e.target.value)}
                                value={city}
                                onKeyPress={search} />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <button className="btns" onClick={successAlert} > Find location </button>
            </div>
            {weather.main && (
                <div>
                    <WeatherScreen weather={weather} />
                </div>
            )}
            {weatherWithLatandLon.main && (
                <div>
                    <WeatherWithLatandLonScreen weatherWithLatandLon={weatherWithLatandLon} />
                </div>
            )}
        </div>
    )
}


