import SearchBar from "../../molecules/search-bar/search-bar";

interface Props {
  searchInput: string,
  handleSearch: (e: { target: HTMLInputElement }) => void
}

const Header = ({ searchInput, handleSearch }: Props) => {
  return (
    <div className="header-wrapper">
      <SearchBar searchInput={searchInput} handleSearch={handleSearch} />
    </div>
  );
}

export default Header;