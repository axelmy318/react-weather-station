import { createContext } from 'react'

const WeatherPanelContext = createContext({
    weather: null,
    setWeather: () => {}
})

export default WeatherPanelContext