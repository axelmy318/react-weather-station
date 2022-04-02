import React, { useContext } from 'react'

import { RiTempColdLine as LogoTemp } from 'react-icons/ri'
import { IconContext } from 'react-icons/lib'
import WeatherPanelContext from './WeatherPanelContext'

import { getColor } from '../../colorHandler'

const WeatherTemp = ({ units, theme, color, moreDetails }) => {
    const { weather, } = useContext(WeatherPanelContext) 

    if(weather) {
        return (<>
        <div className={`weather-station-main ${theme}`} style={{borderTopColor: getColor(color)}}>
            <IconContext.Provider value={{color: getColor(color)}}>
                <span className={`weather-widget-solo`}>
                    <span className='weahter-widget-solo-icon'>
                        <LogoTemp />
                        </span>
                    <span className='weahter-widget-solo-text'>
                        {Math.round(weather.main.temp * 10) / 10}{units === 'metric' ? "°" : " F°"}
                    </span>
                </span><br /><br /><br /><br /><br /><br /><br /><br />
            </IconContext.Provider>
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

WeatherTemp.defaultProps = {
  units: 'metric',
  location: null,
  theme: 'default',
  color: 'secondary'
}

export default WeatherTemp