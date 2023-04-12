import SearchButton from "./SearchButton";
import { SearchButtonProps } from "./SearchButton.types";

export default {
  title: "Atom/Search button",
  component: SearchButton,
  argTypes: {},
};

const Template = (args: SearchButtonProps) => <SearchButton {...args} />;

export const defaultSearchButton = Template.bind({});
defaultSearchButton.args = {
  label: "Expertenbereich",
};

export const iconSearchButton = Template.bind({});
iconSearchButton.args = {
  label: "Alle Filter",
  icon: true,
};
