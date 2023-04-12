import AccordionItemMadeIn from "./AccordionItemMadeIn";
import { AccordionItemmadeInprops } from "./AccordionItemMadeIn.types";

export default {
  title: "Molecules/ Acc Item MadeIn",
  component: AccordionItemMadeIn,
  argTypes: {},
};

const Template = (args: AccordionItemmadeInprops) => (
  <AccordionItemMadeIn {...args} />
);

export const defaultAccItemMadeIn = Template.bind({});
defaultAccItemMadeIn.args = {
  imageUrl: "https://picsum.photos/1920/1080",
  imageAltText: "test",
  content: "Nachhaltig hergestellt in Tunesien.",
};
