import "./weather_forcast.css";
const WeatherForcast = ({searchData,unitBtn})=>{
    return (
        <div className="forcast_data">
            <div className="city_state">
            {searchData ? 
                <div>
                    <div>{searchData.data.name}</div>
                </div>
                : "Mumbai"}
            </div>
            <div className="weather_status">
                {searchData ? 
                <div>
                    <div>{searchData.data.weather[0].description}</div>
                </div>
                : "clear"}
            </div>
            <div className="temp">
            {searchData ? 
                <div>
                    <div>{searchData.data.main.temp}{unitBtn?"°F":"°C"}</div>
                </div>
                : "26°C"}
                
            </div>
            
        </div>
    )
}
export default WeatherForcast;