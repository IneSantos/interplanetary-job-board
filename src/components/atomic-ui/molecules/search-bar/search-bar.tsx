import SearchButton from "../../atoms/search-button/search-button";
import SearchInput from "../../atoms/search-input/search-input";
import './search-bar.css';

const SearchBar = () => {
    return (
    <div className="search">
        <SearchButton/>
        <SearchInput/>
   </div>
   )
}

export default SearchBar;