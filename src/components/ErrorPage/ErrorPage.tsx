import { Link } from "react-router-dom";
import { Provider } from "react-redux";

import RootState from "../../store/index";

import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

import "./ErrorPage.scss";

const errorPage = () => {
  return (
    <Provider store={RootState}>
      <Header />
      <div className="error-page">
        <h1>404</h1>
        <h3>This page doesn't exist.</h3>
        <p>
          Go back to <Link to="/">homepage</Link>!
        </p>
      </div>
      <Footer />
    </Provider>
  );
};

export default errorPage;
