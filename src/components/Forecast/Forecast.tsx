import React from "react"
import { IForecast } from "../../models/weather"

interface IProps {
  forecastData: IForecast
}

const Forecast: React.FC<IProps> = ({ forecastData }: IProps) => {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ]

  const currentDay = new Date().getDay()
  const forecastDays = daysOfWeek
    .slice(currentDay, daysOfWeek.length)
    .concat(daysOfWeek.slice(0, currentDay))

  console.log(forecastData.list[0])
  return (
    <div className="accordion w-2/4 space-y-5" id="accordionExample">
      {forecastData.list.splice(0, 7).map((day, index) => (
        <div
          key={index}
          className="rounded-2xl px-4 bg-white border border-gray-200"
        >
          <div
            className="accordion-header mb-0 cursor-pointer flex justify-between items-center"
            id={`heading${index}`}
            data-bs-toggle="collapse"
            data-bs-target={`#placeholder${index}`}
            aria-expanded="false"
            aria-controls={`${index}`}
          >
            <div className="flex justify-center items-center space-x-2">
              <img
                src={`icons/${day.weather[0].icon}.png`}
                className="h-10"
                alt="weather"
              />
              <span className="font-bold">{forecastDays[index]}</span>
            </div>
            <div className="flex justify-center items-center space-x-2">
              <span className="capitalize">{day.weather[0].description}</span>
              <span className="text-zinc-700/50">
                {Math.round(day.main.temp_max)}°C /
                {Math.round(day.main.temp_min)}
                °C
              </span>
            </div>
          </div>
          <div
            id={`placeholder${index}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading${index}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5 flex justify-between items-center">
              <div className="flex justify-center items-start flex-col">
                <span>Pressure: {day.main.pressure} hPa</span>
                <span>Clouds : {day.clouds.all}%</span>
                <span>Sea Level : {day.main.sea_level}m</span>
              </div>
              <div className="flex justify-center items-start flex-col">
                <span>Humidity : {day.main.humidity}%</span>
                <span>Wind Speed : {day.wind.speed} m/s</span>
                <span>Feels Like : {day.main.feels_like}°C</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Forecast
