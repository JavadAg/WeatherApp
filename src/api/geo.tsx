import axios from "axios"

const geoApi = (searchValue: string) => {
  const geoApiKey: string | undefined = process.env.REACT_APP_SOME_CONFIGURATION

  const url = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities"

  axios
    .get(`${url}/minPopulation=1000000&namePrefix=${searchValue}`)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.error(error)
    })
}

export default geoApi
