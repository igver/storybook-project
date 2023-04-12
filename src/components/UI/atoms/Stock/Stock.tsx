import { StockProps } from "./Stock.types";

import "./Stock.scss";

export const Stock = ({ numOfItems, ...props }: StockProps) => {
  const itemsText = numOfItems > 1 ? "items" : "item";

  const notAvailable = numOfItems === 0;

  if (notAvailable) {
    return (
      <div className="stock">
        <p className={notAvailable ? "not-available" : ""}>
          Currently not available
        </p>
      </div>
    );
  } else {
    return (
      <div className="stock">
        <p>
          Available:{" "}
          <span>
            {numOfItems} {itemsText}
          </span>
        </p>
      </div>
    );
  }
};

export default Stock;
