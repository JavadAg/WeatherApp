import axios from "axios"
import { useState } from "react"
import Forecast from "./components/Forecast/Forecast"
import Search from "./components/Search/Search"
import Weather from "./components/Weather/WeatherCard"
import { IData } from "./models/search"
import { IWeather, IForecast } from "./models/weather"

interface IGeo {
  lat: string
  lon: string
}

function App() {
  const [weatherData, setWeatherData] = useState<IWeather | undefined>()
  const [forecastData, setForecastData] = useState<IForecast | undefined>()

  const handleSearchData = async (searchData: IData) => {
    const [lat, lon] = searchData.value.split(" ")

    const response = await axios.all([
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`
      ),
      axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`
      )
    ])

    const weatherResponse = await response[0].data

    const forecastResponse = await response[1].data

    setWeatherData(weatherResponse)
    setForecastData(forecastResponse)
  }

  return (
    <div className="from-purple-300 to-violet-500 bg-gradient-to-br min-h-screen flex justify-start pt-10 items-center space-y-10 flex-col">
      <Search handleSearchData={handleSearchData} />
      {weatherData && forecastData ? (
        <>
          <Weather weatherData={weatherData} />
          <Forecast forecastData={forecastData} />
        </>
      ) : (
        <div className="text-slate-100 backdrop-blur-xl bg-gradient-to-br from-purple-500/40 to bg-violet-600/40 p-4 rounded-2xl cursor-default">
          Search a City
        </div>
      )}
    </div>
  )
}

export default App
