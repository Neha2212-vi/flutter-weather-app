import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from './components/search_bar/search_bar';
import './App.css';
import WeatherForcast from './components/weather_forcast/weather_forcast';

const api_data = {
  key: "672f8d580860b5fb3b021fcb0d65ab5e",
  base: `https://api.openweathermap.org/data/2.5`
}
function App() {
  const [unit, setUnit] = useState("metric");
  const [searchData, setSearchData] = useState()
  const [serachInput, setSearchInput] = useState("")
  const [flag, setFlag] = useState(false)
  const [unitBtn, setUnitBtn] = useState(false)
  useEffect(()=>{
    const fetchData = async () => {
      const data = await axios.get(`${api_data.base}/weather?q=${serachInput}&appid=${api_data.key}&units=${unit}`)
      console.log(data)
      setSearchData(data)
      setFlag(false)
  }
  fetchData()
  },[flag===true,unit])
  return (
    <div className="App">
      <SearchBar 
      setSearchInput={setSearchInput}
      setFlag={setFlag}
      setUnit={setUnit}
      setUnitBtn={setUnitBtn}
      />
      <WeatherForcast 
      searchData={searchData}
      unitBtn={unitBtn}
      />
    </div>
  );
}

export default App;
