import React from "react";

import { Provider } from "react-redux";
import RootState from "./store/index";

// import { Outlet } from "react-router-dom";

// import router from "./routes/routes";

import "./App.css";

import { Layout } from "../src/lib/layout";

// import { ProductCardListing } from "./components/productCardListing/ProductCardListing";
// import { defaults as ProductListingDefaults } from "./components/productCardListing/ProductCardListing.defaults";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./components/toastify/toastify.scss";

import { MyModal } from "./components/myModal/MyModal";
import { Outlet } from "react-router-dom";

function App() {
  // console.log(router.routes);

  return (
    <div>
      <Provider store={RootState}>
        <Layout>
          <Outlet />
        </Layout>

        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <MyModal heading="Cart" show={false} usingMyModal={false} />
      </Provider>
    </div>
  );
}

export default App;
