import React, { useContext } from 'react'

import { RiTempColdLine as LogoTemp } from 'react-icons/ri'
import { IconContext } from 'react-icons/lib'
import WeatherPanelContext from './WeatherPanelContext'
import WeatherSettings from '../../openweathermapDefaults'

import { getColor } from '../../colorHandler'

const WeatherIcon = ({ units, theme, color, moreDetails }) => {
    const { weather, } = useContext(WeatherPanelContext) 

    if(weather) {
        return (<>
        <div className={`weather-station-main ${theme}`} style={{borderTopColor: getColor(color)}}>
            <div className='weather-panel-widget'>
                <IconContext.Provider value={{color: getColor(color)}}>
                    <span className={`weather-widget-solo`}>
                        <span className='weahter-widget-solo-image'>
                            <img src={`${WeatherSettings.imgUrl}${weather.weather[0].icon}@4x.png`} height={128} />
                        </span>
                        <span className='weahter-widget-solo-text'>
                            {weather.weather[0].description}
                            {weather.weather[0].description}
                            {weather.weather[0].description}
                        </span>
                    </span>
                </IconContext.Provider>
            </div>
        </div>
        </>)
    }
    else {
        return (<>
        <div className={`weather-station-main ${theme}`} style={{borderTopColor: getColor(color)}}>
            <IconContext.Provider value={{color: getColor(color)}}>
                <span className={`weather-widget-solo`}>
                    <span className='weahter-widget-solo-icon'>
                        <LogoTemp />
                    </span>
                    <span className='weahter-widget-solo-text'>
                        loading
                    </span>
                </span>
            </IconContext.Provider>
        </div>
        </>)
    }
}

WeatherIcon.defaultProps = {
  units: 'metric',
  location: null,
  theme: 'default',
  color: 'secondary'
}

export default WeatherIcon