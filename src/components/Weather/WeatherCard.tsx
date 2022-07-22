import React from "react"
import { IWeather } from "../../models/weather"

interface IProps {
  weatherData: IWeather
}

const WeatherCard: React.FC<IProps> = ({ weatherData }) => {
  return (
    <div className="flex flex-col justify-between items-center backdrop-blur-2xl bg-gradient-to-tr from-indigo-800/30 to-pink-800/30 space-y-10 py-5 px-10 w-2/4 rounded-2xl text-white shadow-sm shadow-purple-600/20">
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-center items-start flex-col">
          <span className="text-3xl font-bold mb-2">{weatherData.name}</span>
          <span className="capitalize">
            {weatherData.weather[0].description}
          </span>
        </div>
        <div>
          <img
            src={`icons/${weatherData.weather[0].icon}.png`}
            alt="weather_icon"
          />
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        <span className="text-8xl">{Math.round(weatherData.main.temp)}°C</span>
        <div className="flex justify-center items-start flex-col capitalize">
          <span>feels like : {Math.round(weatherData.main.feels_like)}°C</span>
          <span>humidity : {Math.round(weatherData.main.humidity)}%</span>
          <span>pressure : {Math.round(weatherData.main.pressure)} hPa</span>
          <span>maximum temp : {Math.round(weatherData.main.temp_max)}°C</span>
          <span>minimum temp : {Math.round(weatherData.main.temp_min)}°C</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
