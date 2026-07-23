import React from "react";
import styles from "@/components/Layout/Layout.module.css";
import Header from "./navbar/Navabr";
import Footer from "./footer/Footer";

const Layout = ({ children }) => (
  <div className={styles.page}>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
