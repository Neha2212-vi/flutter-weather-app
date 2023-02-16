import { UilSearch, UilHeart } from '@iconscout/react-unicons';
import "./searchBar.css";

const SearchBar = ({ setSearchInput, setFlag, setUnit, setUnitBtn, setFavourite }) => {

    return (
        <>
            <div className='search_container'>
                <input
                    type="search"
                    placeholder="City,State.."
                    className="search_input"
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <UilSearch
                    className="search_logo"
                    onClick={() => setFlag(true)}
                />
                <UilHeart
                    className="favourite"
                    onClick={() => setFavourite(true)}
                />

            </div>
            <div className="unit_converter">
                <div>Unit converter</div>
                <button
                    onClick={() => { setUnit('metric'); setUnitBtn(false) }}
                >&#176;C</button>
                <button
                    onClick={() => { setUnit('imperial'); setUnitBtn(true) }}
                >&#176;F</button>
            </div>
        </>
    )
}
export default SearchBar;