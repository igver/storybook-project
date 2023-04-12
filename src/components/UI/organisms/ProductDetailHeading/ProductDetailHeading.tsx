import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { ReduxState } from "src/store/state.types";
import "./ProductDetailHeading.scss";
import { Image } from "../../atoms/Image/Image";
import { ProductItemInfo } from "../../molecules/ProductItemInfo/ProductItemInfo";

import { addToCartHelper } from "../../../../lib/helpers/addToCartHelper";
// import { productActions } from "src/store/products";
import { MySwiper } from "../../molecules/MySwiper/MySwiper";
import { ProductProps } from "../../../../lib/types/Product.types";

export const ProductDetailHeading = (product: ProductProps) => {
  const products = useSelector((state: ReduxState) => state.product);
  const productsInCart = useSelector(
    (state: ReduxState) => state.cart.products
  );
  let currentProduct: ProductProps | undefined = undefined;
  let currentProductId: number | undefined = undefined;
  // const productId = useLoaderData() as number;

  const router = useParams();

  if (router.productId) {
    const productId = +router.productId;
    currentProduct = products[productId - 1];
    currentProductId = currentProduct.id;
  }

  const productIndex = products.findIndex(
    (product) => +product.id === currentProductId
  );

  const dispatch = useDispatch();

  // dispatch(productActions.addProduct(currentProduct));

  if (currentProduct === undefined) return null;

  // console.log(typeof currentProduct.stock);

  const addToCartHandler = () => {
    addToCartHelper(
      dispatch,
      currentProduct,
      productsInCart,
      currentProduct !== undefined && currentProduct.stock,
      productIndex
    );
  };

  // console.log(currentProduct.image);

  const multipleImages = currentProduct.image.length > 1;
  // console.log(multipleImages);

  // console.log(currentProduct);

  // const productToSendToSwiper = {
  //   product: currentProduct,
  // };

  // console.log(productToSendToSwiper);

  if (currentProduct === null) {
    return <p>"no product found!";</p>;
  }
  return (
    <div>
      <div className="product-detail-page">
        {multipleImages === true ? (
          <MySwiper
            heading={currentProduct.heading}
            similarProducts={currentProduct.similarProducts}
            visibleOne={true}
            currProd={currentProduct}
          />
        ) : (
          <Image
            className="product-detail-page__product-image"
            src={currentProduct.image[0]}
            altText={currentProduct.altText}
          />
        )}

        <ProductItemInfo
          id={currentProduct.id}
          image={currentProduct.image}
          altText={currentProduct.altText}
          heading={currentProduct.heading}
          price={currentProduct.price}
          description={currentProduct.description}
          stock={currentProduct.stock}
          onButtonClick={addToCartHandler}
        />
      </div>
      <MySwiper
        heading={currentProduct.heading}
        similarProducts={currentProduct.similarProducts}
        visibleOne={false}
        currProd={currentProduct}
      />
    </div>
  );
};

export default ProductDetailHeading;
