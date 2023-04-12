import List from "./List";
import { ListProps } from "./List.types";

export default {
  title: "Atom/List",
  component: List,
  argTypes: {},
};

const Template = (args: ListProps) => <List {...args} />;

export const defaultList = Template.bind({});
defaultList.args = {
  items: ["first", "second", "third"],
};
