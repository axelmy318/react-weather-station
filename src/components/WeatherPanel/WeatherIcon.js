import React, { useContext } from 'react'

import { RiTempColdLine as LogoTemp } from 'react-icons/ri'
import { IconContext } from 'react-icons/lib'
import WeatherPanelContext from './WeatherPanelContext'
import WeatherSettings from '../../openweathermapDefaults'

import { getColor } from '../../colorHandler'
import ScaleText from 'react-scale-text'

const WeatherIcon = ({ units, theme, color }) => {
    const { weather, } = useContext(WeatherPanelContext) 

    if(weather) {
        return (<>
        <div className={`weather-station-main ${theme}`} style={{borderTopColor: getColor(color)}}>
                <IconContext.Provider value={{color: getColor(color)}}>
                    <span className={`weather-widget-solo`}>
                        <span className='weahter-widget-solo-image'>
                            <img src={`${WeatherSettings.imgUrl}${weather.weather[0].icon}@4x.png`} height={128} />
                        </span>
                        <span className='weahter-widget-solo-text'>
                            <ScaleText widthOnly={true} minFontSize={25} maxFontSize={35}>
                                {weather.weather[0].description}
                            </ScaleText>
                        </span>
                    </span>
                </IconContext.Provider>
            </div>
        </>)
    }
    else {
        return (<>
        <div className={`weather-station-main ${theme}`} style={{borderTopColor: getColor(color)}}>
            <IconContext.Provider value={{color: getColor(color)}}>
                <span className={`weather-widget-solo`}>
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