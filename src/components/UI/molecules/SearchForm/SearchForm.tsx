import SearchBar from "../../atoms/SearchBar/SearchBar";
import SearchButton from "../../atoms/SearchButton/SearchButton";

const SearchForm = () => {
  return (
    <div className="search-form">
      <SearchBar />
      <SearchButton label="Expertenbereich" />
      <SearchButton label="Diagnose/ Produkte" />
      <SearchButton label="Alle Filter" icon={true} />
    </div>
  );
};

export default SearchForm;
