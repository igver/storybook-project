import { ListProps } from "./List.types";

import "./List.scss";

const List = (props: ListProps) => {
  return (
    <ul>
      {props.items.map((item, index) => {
        return <li key={index}>- {item}</li>;
      })}
    </ul>
  );
};

export default List;
