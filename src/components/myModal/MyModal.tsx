import "./myModal.scss";
import { MyModalProps } from "./MyModal.types";
import { Button } from "../Button/Button";
import { ReduxState } from "src/store/state.types";

import Modal from "react-modal";

import { ProductItemCart } from "../ProductItemCart/ProductItemCart";

import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../store/modal";

import { Portal } from "react-portal";
import { ProductProps } from "src/lib/types/Product.types";
import { ProductItemCartProps } from "../ProductItemCart/ProductItemCart.types";

export const MyModal = ({ heading, usingMyModal }: MyModalProps) => {
  // react-modal logic
  Modal.setAppElement("#root");

  const { modal, cart } = useSelector((state: ReduxState) => state);
  const { showModal } = modal;

  const { products } = cart;

  // console.log(products);

  //const isShown = useSelector((state: ReduxState) => state.showModal);

  const dispatch = useDispatch();

  const toggleModalHandler = () => {
    dispatch(modalActions.toggleModal());
  };

  const showModalHandler = () => {
    dispatch(modalActions.showModal());
  };

  const hideModalHandler = () => {
    dispatch(modalActions.hideModal());
  };

  const totalPrice = products.reduce((total: number, product: ProductProps) => {
    // console.log(product.price);

    return total + product.price;
  }, 0);

  // console.log(products);

  if (showModal) {
    if (usingMyModal) {
      return (
        <Portal>
          <div className="my-modal-wrapper">
            <div className="my-modal">
              <div className="my-modal__heading">
                <h3>My modal - {heading}</h3>
                <span onClick={showModalHandler}></span>
              </div>
              <div className="my-modal__body">
                <ul>
                  <li>{products.length === 0 ? `Cart is empty.` : ""}</li>

                  {products.map((product: ProductItemCartProps) => (
                    <li key={product.id}>
                      <ProductItemCart
                        key={product.id}
                        id={product.id}
                        image={product.image}
                        altText={product.altText}
                        heading={product.heading}
                        price={product.price}
                        description={product.description}
                        stock={product.stock}
                        numItems={product.numItems}
                        similarProducts={product.similarProducts}
                      />
                    </li>
                  ))}
                </ul>

                {totalPrice > 0 ? (
                  <div className="my-modal__body__sum">
                    <p>{`Total: ${totalPrice} €`}</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="my-modal__footer">
                <Button
                  enabled={true}
                  buttonLabel="Close"
                  onButtonClick={toggleModalHandler}
                ></Button>
              </div>
            </div>
          </div>
        </Portal>
      );
    } else {
      return (
        <Portal>
          <Modal
            isOpen={showModal}
            onRequestClose={hideModalHandler}
            contentLabel="Modal for products"
            className="my-modal"
          >
            <div className="my-modal__body">
              <ul>
                <li>{products.length === 0 ? `Cart is empty.` : ""}</li>

                {products.map((product: ProductItemCartProps) => (
                  <li key={product.id}>
                    <ProductItemCart
                      key={product.id}
                      id={product.id}
                      image={product.image}
                      altText={product.altText}
                      heading={product.heading}
                      price={product.price}
                      description={product.description}
                      stock={product.stock}
                      numItems={product.numItems}
                      similarProducts={product.similarProducts}
                    />
                  </li>
                ))}
              </ul>

              {totalPrice > 0 ? (
                <div className="my-modal__body__sum">
                  <p>{`Total: ${totalPrice} €`}</p>
                </div>
              ) : (
                ""
              )}
            </div>
          </Modal>
        </Portal>
      );
    }
  } else {
    return null;
  }
};
