import { UilSearch } from '@iconscout/react-unicons';
import "./searchBar.css";

const SearchBar = ({setSearchInput,setFlag,setUnit,setUnitBtn}) => {
   
    return (
        <>
            <div className='search_container'>
                <input
                    type="search"
                    placeholder="city,state.."
                    className="search_input"
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <UilSearch
                    className="search_logo"
                    onClick={() => setFlag(true)}
                />
            </div>
            <div className="unit_converter">
                <div>Unit converter</div>
                <button
                onClick={()=>{setUnit('metric');setUnitBtn(false)}}
                >&#176;C</button>
                <button
                onClick={()=>{setUnit('imperial');setUnitBtn(true)}}
                >&#176;F</button>
            </div>
        </>
    )
}
export default SearchBar;