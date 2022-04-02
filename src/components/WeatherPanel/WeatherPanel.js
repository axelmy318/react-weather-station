import React, { useState, useEffect } from 'react'
import WeatherPanelContext from './WeatherPanelContext'
import { LoadWeatherData } from '../..'
import '../../WeatherWidget.css'

const WeatherPanel = ({ location, units, children }) => {
    const [ weather, setWeather ] = useState(null)

    useEffect(() => {
        if(location !== null) {
            LoadWeatherData(location)
            .then(response => {
                if(response.success)
                    setWeather(response.data)
                else
                    setWeather(null)
            })
        }  
    }, [location])

    return (
        <div className='weather-panel'>
            <WeatherPanelContext.Provider value={{
                weather,
                setWeather
            }}>
                {children}
            </WeatherPanelContext.Provider>
        </div>
    )
}

WeatherPanel.defaultProps = {
    location: '',
    units: 'metric'
}

export default WeatherPanel