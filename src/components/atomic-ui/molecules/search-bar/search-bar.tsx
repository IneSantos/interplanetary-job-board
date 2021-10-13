import SearchButton from "../../atoms/search-button/search-button";
import SearchInput from "../../atoms/search-input/search-input";
import './search-bar.css';

interface Props {
    searchInput: string,
    handleSearch: (e: { target: HTMLInputElement }) => void
}

const SearchBar = ({ searchInput, handleSearch }: Props) => {
    return (
        <div className="search">
            <SearchButton />
            <SearchInput input={searchInput} handleSearch={handleSearch} />
        </div>
    )
}

export default SearchBar;