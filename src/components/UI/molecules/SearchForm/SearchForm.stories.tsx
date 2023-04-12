import React from "react";

import SearchForm from "./SearchForm";

import "./SearchForm.scss";

export default {
  title: "Molecules/Search Form",
  component: SearchForm,
  argTypes: {},
};

const Template = () => <SearchForm />;

export const defaultSearchForm = Template.bind({});
