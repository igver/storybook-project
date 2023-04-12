import AccordionQuality from "./AccordionQuality";
import { AccordionQualityProps } from "./AccordionQuality.types";

export default {
  title: "Molecules/Acc Item Quality",
  component: AccordionQuality,
  argTypes: {},
};

const Template = (args: AccordionQualityProps) => (
  <AccordionQuality {...args} />
);

export const defaultAccItemQuality = Template.bind({});
defaultAccItemQuality.args = {
  items: [
    {
      header: "Grüner Knopf",
      content:
        "Das staatlich überwachte Siegel kennzeichnet sozial und ökologisch nachhaltig hergestellte Textilien.",
      image: { url: "https://picsum.photos/1920/1080" },
    },
    {
      header: "HN geprüft",
      content:
        "Transparent in der Lieferkette: Nachhaltig hergestellt und geprüft entsprechend den hohen hessnatur Qualitätstandards.",
      image: { url: "https://picsum.photos/1920/1080" },
    },
    {
      header: "Leader Status in der FWF",
      content:
        "Die göchste Auszeichnung der Fair Wear Foundation steht für konkrete Verbessung der sozialen Standards in der textilen Lieferkette.",
      image: { url: "https://picsum.photos/1920/1080" },
    },
  ],
};
