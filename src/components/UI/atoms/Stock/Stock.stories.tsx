import Stock from "./Stock";
import { StockProps } from "./Stock.types";

export default {
  title: "Atom/Stock items",
  component: Stock,
  args: {},
};

const Template = (args: StockProps) => <Stock {...args} />;

export const zeroOnStock = Template.bind({});
zeroOnStock.args = {
  numOfItems: 0,
};

export const oneOnStock = Template.bind({});
oneOnStock.args = {
  numOfItems: 1,
};

export const tenOnStock = Template.bind({});
tenOnStock.args = {
  numOfItems: 10,
};
