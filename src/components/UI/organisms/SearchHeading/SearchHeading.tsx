import Heading from "../../atoms/Heading/Heading";
import SearchForm from "../../molecules/SearchForm/SearchForm";

import "./SearchHeading.scss";

const SearchHeading = () => {
  return (
    <div className="search-heading">
      <Heading text="Vans shoes stores" variante="h2" />
      <p className="search-heading__sbheading">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel maximus
        nisl, eu pellentesque tortor. Proin molestie leo sit amet dui facilisis,
        ut fringilla odio semper.
      </p>
      <SearchForm />
    </div>
  );
};

export default SearchHeading;
