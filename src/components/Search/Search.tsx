import { AsyncPaginate } from "react-select-async-paginate"
import axios from "axios"
import React from "react"
import { SingleValue, ActionMeta } from "react-select"
import { IData } from "../../models/search"

const geoApiKey: string | number | boolean = process.env.REACT_APP_GEO_API_KEY!

const url = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities"

interface City {
  latitude: string
  longitude: string
  name: string
  countryCode: string
}

interface ISearch {
  handleSearchData: (searchData: IData) => void
}

const Search: React.FC<ISearch> = (props: ISearch) => {
  const loadOptions = async (inputValue: string) => {
    const res = await axios.get(
      `${url}?minPopulation=1000000&namePrefix=${inputValue}`,
      {
        headers: {
          "X-RapidAPI-Key": geoApiKey,
          "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com"
        }
      }
    )

    return {
      options: await res.data.data.map((city: City) => {
        return {
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name},${city.countryCode}`
        }
      })
    }
  }

  /*   const customStyles = {
    option: (provided: any, state: { isSelected: any }) => ({
      ...provided,
      backgroundColor: "#e6e6ff",
      borderRadius: "20px",
      color: state.isSelected ? "white" : "#8080ff",
      padding: 20
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
    }),
    singleValue: (provided: any, state: { isDisabled: any }) => {
      const opacity = state.isDisabled ? 0.5 : 1
      const transition = "opacity 300ms"

      return { ...provided, opacity, transition }
    }
  } */

  const handleOnChange = (
    newValue: SingleValue<IData>,
    actionMeta: ActionMeta<IData>
  ) => {
    props.handleSearchData(newValue!)
  }

  return (
    <AsyncPaginate
      className=" ml-auto mr-auto w-2/4"
      placeholder="Search"
      onChange={handleOnChange}
      debounceTimeout={1000}
      loadOptions={loadOptions}
    />
  )
}

export default Search
