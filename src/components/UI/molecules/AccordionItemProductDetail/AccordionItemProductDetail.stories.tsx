import AccordionItemProductDetail from "./AccordionItemProductDetail";
import { AccordionItemProductDetailProps } from "./AccordionItemProductDetail.types";

export default {
  title: "Molecules/ Acc Item Product Detail",
  component: AccordionItemProductDetail,
  argTypes: {},
};

const Template = (args: AccordionItemProductDetailProps) => (
  <AccordionItemProductDetail {...args} />
);

export const defaultAccItemProductDetail = Template.bind({});
defaultAccItemProductDetail.args = {
  paragraphs: [
    "Ein unverzichtbarer Allrounder: Das hochwertig verarbeitete Top aus mattem Crêpe-Jersey mit trockenem Griff. Solo oder in vielseitigen Kombis getragen macht das hautschmeichelnde Basic mit schmal eingefassten <a target='_blank' href='/herren/schuhe-und-accessoires/c/herren-schuhe-accessoires'>Trägern</a> stets eine gute Figur. Unsere liebste Naturfaser, die Bio-Baumwolle, garantiert überdies maximalen Tragekomfort.",
    "Leicht, saugfähig und atmungsaktiv lässt Bio-Baumwolle unseren Körper regenerieren. Frei von Pestiziden und anderen giftigen Rückständen, die in herkömmlicher <a target='_blank' href='/de/textillexikon/B/baumwolle'>Baumwolle</a> oft noch zu finden sind, lässt sie uns aufatmen und ihre sanfte Natürlichkeit einfach genießen.",
  ],
  bullets: [
    "Griffiger Crêpe-Jersey",
    "Matte Optik",
    "Atmungsaktiv und feuchtigkeitsregulierend",
    "Vielseitig kombinierbares Basic",
  ],
};
