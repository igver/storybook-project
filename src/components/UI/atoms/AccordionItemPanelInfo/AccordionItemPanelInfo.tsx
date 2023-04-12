import Heading from "../Heading/Heading";
import { Image } from "../Image/Image";

import { AccordionItemPanelInfoProps } from "./AccordionItemPanelInfo.types";

import "./AccordionItemPanelInfo.scss";

const AccordionItemPanelInfo = ({
  header,
  imgUrl,
  content,
}: AccordionItemPanelInfoProps) => {
  return (
    <>
      <div className="my-acc__my-item">
        <div className="my-acc__my-item__image-box">
          <Image src={imgUrl} altText={imgUrl} />
        </div>
        <div className="my-acc__my-item__text-info">
          {header && <Heading variante="h6" text={header} />}
          {content && <p>{content}</p>}
        </div>
      </div>
    </>
  );
};

export default AccordionItemPanelInfo;
