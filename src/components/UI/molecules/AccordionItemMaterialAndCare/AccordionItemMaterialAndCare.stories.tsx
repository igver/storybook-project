import AccordionItemMaterialAndCare from "./AccordionItemMaterialAndCare";
import { AccordionItemMaterialAndCareProps } from "./AccordionItemMaterialAndCare.types";

export default {
  title: "Molecules/ Acc Item Material and Care",
  component: AccordionItemMaterialAndCare,
  argTypes: {},
};

const Template = (args: AccordionItemMaterialAndCareProps) => (
  <AccordionItemMaterialAndCare {...args} />
);

export const defaultAccItemMaterialAndCare = Template.bind({});
defaultAccItemMaterialAndCare.args = {
  materials: {
    header: "pflege",
    materialDetailData: [
      {
        header: "98% baumwolle",
        content: "aus der Türkei, aus biologischem Anbau",
        image: { altText: "test", url: "https://picsum.photos/1920/1080" },
      },
      {
        header: "2% Elastan",
        content: "aus der Türkei, lt. hessnatur-Richtlinie",
        image: { altText: "test", url: "https://picsum.photos/1920/1080" },
      },
    ],
  },

  care: [
    {
      name: "Normalwaschgang bei 40°C",
      imageUrl: "https://picsum.photos/1920/1080",
    },
    {
      name: "Nicht im Wäschetrockner trocknen",
      imageUrl: "https://picsum.photos/1920/1080",
    },
    {
      name: "Bügeln*** bei maximal 200°C",
      imageUrl: "https://picsum.photos/1920/1080",
    },
  ],
};
