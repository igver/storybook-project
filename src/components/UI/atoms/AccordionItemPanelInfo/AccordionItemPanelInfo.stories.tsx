import React from "react";
import AccordionItemPanelInfo from "./AccordionItemPanelInfo";
import { AccordionItemPanelInfoProps } from "./AccordionItemPanelInfo.types";

export default {
  title: "Atom/Accordion single item",
  component: AccordionItemPanelInfo,
  argTypes: {},
};

const Template = (args: AccordionItemPanelInfoProps) => (
  <AccordionItemPanelInfo {...args} />
);

export const defaultAccordionItemPanelInfo = Template.bind({});
defaultAccordionItemPanelInfo.args = {
  header: "Header",
  imgUrl: "./images/image-1.jpg",
  imgAlt: "string",
  content: "some text goes here",
};
