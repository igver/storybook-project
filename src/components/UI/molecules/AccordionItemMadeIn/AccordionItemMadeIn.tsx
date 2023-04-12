import { AccordionItemmadeInprops } from "./AccordionItemMadeIn.types";
import AccordionItemPanelInfo from "../../atoms/AccordionItemPanelInfo/AccordionItemPanelInfo";

const AccordionItemMadeIn = ({
  imageUrl,
  imageAltText,
  content,
}: AccordionItemmadeInprops) => {
  return (
    <AccordionItemPanelInfo
      imgUrl={imageUrl}
      imgAlt={imageAltText}
      content={content}
    />
  );
};

export default AccordionItemMadeIn;
