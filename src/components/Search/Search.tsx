import { useState } from "react"
import AsyncSelect from "react-select/async"
import geoApi from "../../api/geo"

const Search = () => {
  const [searchValue, setSearchValue] = useState<string>("")

  const handleOptions = (inputValue: string) => {
    geoApi(inputValue)
  }

  return <AsyncSelect loadOptions={handleOptions} />
}

export default Search
