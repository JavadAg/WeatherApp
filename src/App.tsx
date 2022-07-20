import Search from "./components/Search/Search"
import Weather from "./components/Weather/WeatherCard"
import { IData } from "./models/search"

function App() {
  const handleSearchData = (searchData: IData) => {
    const [lat, lon] = searchData.value.split(" ")
    console.log(lat, lon)
  }

  return (
    <div className="from-purple-300 to-violet-500 bg-gradient-to-br min-h-screen flex justify-start pt-10 items-center space-y-10 flex-col">
      <Search handleSearchData={handleSearchData} />
      <Weather />
    </div>
  )
}

export default App
