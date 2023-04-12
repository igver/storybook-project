import App from "../App";
import { createBrowserRouter } from "react-router-dom";

// import rootLoader from "../routes/routeLoader";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import { ProductCardListing } from "../components/productCardListing/ProductCardListing";

import ProductDetailHeading from "../components/UI/organisms/ProductDetailHeading/ProductDetailHeading";

// import { Layout } from "../lib/layout";

// import products from "../store/products";

// import products from "../store/products";

const productLoader = ({ request }) => {
  const url = new URL(request.url);
  const pathName = url.pathname;

  const myArray = pathName.split("/");

  const id = myArray.slice(-1);

  const productId = id.reduce((acc, sum) => {
    return acc + sum;
  });

  // console.log(productId);

  // console.log(productId);

  // const currProduct = products[productId - 1];

  // console.log(currProduct);

  // console.log(productId);

  return productId;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    exact: true,
    children: [
      {
        path: "/",
        element: <ProductCardListing heading="Newest shoes heading" />,
      },
      {
        path: "product/:productId",
        element: <ProductDetailHeading />,
        loader: productLoader,
      },
    ],
  },
  // {
  //   path: "product/:productId",
  //   element: <ProductPage />,
  //   loader: rootLoader,
  // },
]);

export default router;
