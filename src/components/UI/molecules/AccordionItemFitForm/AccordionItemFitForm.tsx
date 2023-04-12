import { AccordionItemFitFormProps } from "./AccordionItemFitForm.types";

import List from "../../atoms/List/List";

const AccordionItemFitForm = (props: AccordionItemFitFormProps) => {
  return (
    <div className="fit-form">
      <List items={props.passform} />

      <List items={props.details} />

      <p>{props.referenceSize}</p>

      <p>
        <a href="#">To size chart</a>
      </p>
    </div>
  );
};

export default AccordionItemFitForm;
