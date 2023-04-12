import React from "react";

import SearchBar from "./SearchBar";

import "./SearchBar.scss";

export default {
  title: "Atom/Search bar",
  component: SearchBar,
  argTypes: {},
};

const Template = () => <SearchBar />;

export const defaultSearchBar = Template.bind({});
