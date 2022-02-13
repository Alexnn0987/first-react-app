import React from "react";
// import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import style from "./PageWrapper.module.scss";

type PageWrapperPropTypes = {
    children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperPropTypes> = (props) => {
    const { children } = props;
  return (
    <div className={style.page_wrapper}>
      <Header />
      <main className={style.main}>
        { children }
        {/* <Outlet /> */}
      </main>
      <Footer />
    </div>
  );
};

export default PageWrapper;