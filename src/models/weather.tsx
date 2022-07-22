export interface IWeather {
  name: string
  main: {
    feels_like: number
    humidity: number
    pressure: number
    temp: number
    temp_max: number
    temp_min: number
  }
  wind: { deg: number; speed: number }
  weather: {
    description: string
    icon: string
    main: string
  }[]
}

export interface IForecast {
  list: {
    clouds: { all: number }
    main: {
      feels_like: number
      humidity: number
      pressure: number
      sea_level: number
      temp: number
      temp_max: number
      temp_min: number
    }
    wind: { speed: number }
    weather: {
      description: string
      icon: string
      main: string
    }[]
  }[]
}
