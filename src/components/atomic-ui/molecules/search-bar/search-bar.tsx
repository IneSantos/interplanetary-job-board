import SearchButton from "../../atoms/search-button/search-button";
import SearchInput from "../../atoms/search-input/search-input";
import './search-bar.css';

function SearchBar () {
    return (
    <div className="search">
        <SearchInput/>
        <SearchButton/>
   </div>
   )
}

export default SearchBar;