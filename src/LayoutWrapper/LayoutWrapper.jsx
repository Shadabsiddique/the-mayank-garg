import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LayoutWrapper = ({ children }) => {
  return (
    <Fragment>
      <Header />
        {children}
      <Footer />
    </Fragment>
  );
}
export default LayoutWrapper;
