import AccordionItemFitForm from "./AccordionItemFitForm";
import { AccordionItemFitFormProps } from "./AccordionItemFitForm.types";

export default {
  title: "Molecules/Acc Item fitForm",
  component: AccordionItemFitForm,
  args: {},
};

const Template = (args: AccordionItemFitFormProps) => (
  <AccordionItemFitForm {...args} />
);

export const defaultAccItemFitForm = Template.bind({});
defaultAccItemFitForm.args = {
  passform: ["Slim Fit"],
  details: [
    "Saumweite in Größe 27/32 ca. 31 cm.",
    "Innere Beinlänge in Größe 27/32 ca. 77 cm.",
    "Sitzt ca. 3 cm unterhalb Bauchnabel.",
  ],
  referenceSize: "Das Model ist xxx cm groß und trägt Größe xx.",
};
