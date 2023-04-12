import { AccordionQualityProps } from "./AccordionQuality.types";

import AccordionItemPanelInfo from "../../atoms/AccordionItemPanelInfo/AccordionItemPanelInfo";

const AccordionQuality = (props: AccordionQualityProps) => {
  // console.log(props.items);

  return (
    <>
      <div className="items">
        {props.items.map((item, index) => {
          // console.log(item);

          return (
            <AccordionItemPanelInfo
              key={index}
              header={item.header}
              imgUrl={item.image.url}
              content={item.content}
            />
          );
        })}
      </div>
    </>
  );
};
export default AccordionQuality;
