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
  const [searchData, setSearchData] = useState();
  const [serachInput, setSearchInput] = useState("");
  const [flag, setFlag] = useState(false);
  const [unitBtn, setUnitBtn] = useState(false);
  const [favourite, setFavourite] = useState(false);
  const [itemsData, setItems] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(`${api_data.base}/weather?q=${serachInput}&appid=${api_data.key}&units=${unit}`)
      setSearchData(data)
      setFlag(false)
    }
    fetchData()
  }, [flag === true, unit]);

  useEffect(() => {
    let favouriteCities = JSON.parse(localStorage.getItem('searchData') || "[]")
    favouriteCities.push(searchData)
    localStorage.setItem('searchData', JSON.stringify(favouriteCities));

  }, [favourite === true]);

  useEffect(() => {
    if (favourite === true) {
      setFavourite(false)
      const item = JSON.parse(localStorage.getItem('searchData'));
      if (item != null) {
        setItems(item);
      }
    }
  });
  useEffect(()=>{
    localStorage.removeItem('searchData')
  },[searchData])
  
  return (
    <div className="App">
      <SearchBar
        setSearchInput={setSearchInput}
        setFlag={setFlag}
        setUnit={setUnit}
        setUnitBtn={setUnitBtn}
        setFavourite={setFavourite}
      />
      <WeatherForcast
        searchData={searchData}
        unitBtn={unitBtn}
      />

      {itemsData && <h1 className="favourite-city-heading">Favourite Cities</h1>}
      {itemsData && itemsData.map(items => (
        <div className="favourite-city_data">
          <div className="city_state">

            <div>
              <div>{items.data.name}</div>
            </div>

          </div>
          <div className="weather_status">

            <div>
              <div>{items.data.weather[0].description}</div>
            </div>

          </div>
          <div className="temp">

            <div>
              <div>{items.data.main.temp}{unitBtn ? "°F" : "°C"}</div>
            </div>
          </div>
        </div>
      ))
      }
      {Error === true && <div className="error">{Error}</div>}
    </div>
  );
}

export default App;
