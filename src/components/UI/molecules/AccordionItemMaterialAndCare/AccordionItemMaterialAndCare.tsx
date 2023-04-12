import { AccordionItemMaterialAndCareProps } from "./AccordionItemMaterialAndCare.types";

import AccordionItemPanelInfo from "../../atoms/AccordionItemPanelInfo/AccordionItemPanelInfo";

import "./AccordionItemMaterialAndCare.scss";

const AccordionItemMaterialAndCare = ({
  materials,
  care,
}: AccordionItemMaterialAndCareProps) => {
  // console.log(typeof materials);

  const [materialsElements] = materials.materialDetailData.map((material) => {
    // console.log(material);
    return (
      <AccordionItemPanelInfo
        header={material.header}
        imgUrl={material.image.url}
        imgAlt={material.image.altText}
        content={material.content}
      />
    );
  });

  const careElements = care.map((care, index) => {
    // console.log(material);
    return (
      <AccordionItemPanelInfo
        key={index}
        header={care.name}
        imgUrl={care.imageUrl}
      />
    );
  });

  return (
    <>
      <div className="items">{materialsElements}</div>
      <div className="items">{careElements}</div>
    </>
  );
};

export default AccordionItemMaterialAndCare;
