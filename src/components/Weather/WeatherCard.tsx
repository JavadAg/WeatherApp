import React from "react"
import { IWeather, IForecast } from "../../models/weather"

interface IProps {
  weatherData: IWeather
  forecastData: IForecast
}

const WeatherCard: React.FC<IProps> = ({ weatherData, forecastData }) => {
  console.log("weather", weatherData, "forecast ", forecastData)
  return (
    <div className="flex flex-col justify-between items-center backdrop-blur-2xl bg-gradient-to-tr from-indigo-800/30 to-pink-800/30 space-y-10 p-5 w-2/4 rounded-2xl text-white shadow-sm shadow-purple-600/20">
      <div className="flex justify-between items-center bg-red-400 w-full">
        <div className="flex justify-center items-center flex-col">
          <span>{weatherData.name}</span>
          <span>{weatherData.weather[0].description}</span>
        </div>
        <div>
          <img
            src={`icons/${weatherData.weather[0].icon}.png`}
            alt="weather_icon"
          />
        </div>
      </div>
      <div className="flex justify-between items-center bg-blue-400 w-full">
        <span>{Math.round(weatherData.main.temp)}°C</span>
        <div className="flex justify-center items-center flex-col">
          <span>{Math.round(weatherData.main.feels_like)}°C</span>
          <span>{Math.round(weatherData.main.humidity)}</span>
          <span>{Math.round(weatherData.main.pressure)}</span>
          <span>{Math.round(weatherData.main.temp_max)}°C</span>
          <span>{Math.round(weatherData.main.temp_min)}°C</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
