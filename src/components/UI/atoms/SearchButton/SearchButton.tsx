import { SearchButtonProps } from "./SearchButton.types";

import { BiFilter } from "react-icons/bi";

import "./SearchButton.scss";

const SearchButton = ({ label, icon }: SearchButtonProps) => {
  return (
    <div className="search-button">
      <button type="button">
        {icon && <BiFilter />} {label}
      </button>
    </div>
  );
};

export default SearchButton;
