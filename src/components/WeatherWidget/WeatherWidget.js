import React, { useState, useEffect } from 'react'
import WeatherSettings from '../../openweathermapDefaults'
import WeatherAPI from '../../openweathermapAPI'
import axios from 'axios'
import './WeatherWidget.css'
import { FiWind as LogoWind, RiTempColdLine as LogoTemp, IoWaterOutline as LogoHumidity, BsSpeedometer2 as LogoGauge } from 'react-icons/all'

import { IconContext } from 'react-icons/lib'

const WeatherWidget = ({ location, units, theme, color, moreDetails }) => {
  WeatherSettings.units = units

  const [weather, setWeather] = useState(null);

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
  
  if(weather) {
    return (<>
      <div className={`weather-station-main ${theme}`} style={{borderTopColor: colors[color]}}>
        <p className={`weather-widget-location`}>{weather.name}</p>
        <img src={`${WeatherSettings.imgUrl}${weather.weather[0].icon}@4x.png`} width={128} height={128} />
        <IconContext.Provider value={{color: colors[color]}}>
          { !moreDetails && <>
            <span className={`weather-widget-big`}><LogoTemp />{Math.round(weather.main.temp * 10) / 10}{units === 'metric' ? "°" : " F°"}</span>
            <span className={`weather-widget-small`}><LogoWind />&nbsp;{Math.round(weather.wind.speed * 10) / 10}{units === 'metric' ? 'km/h' : 'mph'}</span>
          </>}
          { moreDetails && <>
            <span className={`weather-widget-big`}><LogoTemp />{Math.round(weather.main.temp * 10) / 10}{units === 'metric' ? "°" : " F°"}</span>
            <span className={`weather-widget-small`}>Feels like {Math.round(weather.main.feels_like * 10) / 10}{units === 'metric' ? "°" : " F°"}</span>
            <br />
            <div style={{marginTop: '10px'}}></div>
            <span className={`weather-widget-small margin-right`}><LogoWind />&nbsp;{Math.round(weather.wind.speed * 10) / 10}{units === 'metric' ? 'km/h' : 'mph'}</span>
            <span className={`weather-widget-small margin-right`}><LogoHumidity />&nbsp;{Math.round(weather.main.humidity)}%</span>
            <span className={`weather-widget-small`}><LogoGauge />&nbsp;{weather.main.pressure / 1000} bar</span>
          </>}
        </IconContext.Provider>
      </div>
    </>)
  }
  else {
    return (<>Loading</>)
  }
}

WeatherWidget.defaultProps = {
  units: 'metric',
  location: null,
  theme: 'default',
  color: 'secondary'
}

const colors = {
  primary: "blue",
  secondary: "cyan",
  danger: "red",
  warning: "orange",
  pink: "rgb(255, 0, 170)",
  purple: "purple",
  green: "lime",
}

export default WeatherWidget

export const LoadWeatherData = async(location, units = WeatherSettings.units) => {
  const url = `${WeatherSettings.dataUrl}weather?q=${location}&APPID=${WeatherAPI.api_key}&units=${WeatherSettings.units}`
  
  return await axios.get(url)
      .then((response) =>  {
          return {success: true, data: response.data}
      })
      .catch(error => {
          return {success: false, data: null}
      })
}
