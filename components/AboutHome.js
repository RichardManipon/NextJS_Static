import Menu from "/components/Menu";
import Navbar from "/components/Navbar";
import AboutIntro from "/components/AboutIntro";
import AboutDev from "/components/AboutDev";
import Footer from "/components/Footer";

import styles from "../styles/App.module.css";

import { useState } from "react";

const AboutHome = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const [page, setPage] = useState(false);
  return (
    <div>
      {page ? (
        <div className={styles.precssanimatechange}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <div className={styles.precssanimate}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      {hamburgerMenu ? <Menu setHamburgerMenu={setHamburgerMenu} /> : ""}
      <Navbar
        setHamburgerMenu={setHamburgerMenu}
        page={page}
        setPage={setPage}
      />
      <AboutIntro setPage={setPage} />
      <AboutDev />
      <Footer setPage={setPage} />
    </div>
  );
};

export default AboutHome;
