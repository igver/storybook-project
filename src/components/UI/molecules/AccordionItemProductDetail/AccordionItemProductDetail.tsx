import parse from "html-react-parser";

import { AccordionItemProductDetailProps } from "./AccordionItemProductDetail.types";

import List from "../../atoms/List/List";

const AccordionItemProductDetail = (props: AccordionItemProductDetailProps) => {
  return (
    <div className="acc-product-detail">
      {props.paragraphs.map((p, index) => {
        return <p key={index}>{parse(p)}</p>;
      })}
      <List items={props.bullets} />
    </div>
  );
};

export default AccordionItemProductDetail;
