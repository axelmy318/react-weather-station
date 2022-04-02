import WeatherSettings from "./openweathermapDefaults"
import WeatherAPI from "./openweathermapAPI"
import axios from 'axios'

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