import Home from "/components/Home";
import Navbar from "/components/Navbar";
import Menu from "/components/Menu";
import About from "/components/About";
import Process from "/components/Process";
import ContactIntro from "/components/ContactIntro";
import Footer from "/components/Footer";
import Goal from "/components/Goal";
import styles from "../styles/App.module.css";
import { useState } from "react";

import Link from "next/link";

const App = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const [page, setPage] = useState(false);

  return (
    <div>
      {page ? (
        <div className={styles.precssanimatechange}>
          <div></div>
          <div className={styles.load}>
            <div className={styles.logo}>
              <Link href="/">Iskulbukul</Link>
            </div>
          </div>
          <div></div>
        </div>
      ) : (
        <div className={styles.precssanimate}>
        <div></div>
          <div className={styles.load}>
            <div className={styles.logo}>
              <Link href="/">Iskulbukul</Link>
            </div>
          </div>
          <div></div>
        </div>
      )}

      {hamburgerMenu ? <Menu setHamburgerMenu={setHamburgerMenu} /> : ""}
      <Navbar
        setHamburgerMenu={setHamburgerMenu}
        page={page}
        setPage={setPage}
      />
      <Home setPage={setPage} />
      <Goal />
      <About page={page} setPage={setPage} />
      <Process />
      <ContactIntro />
      <Footer setPage={setPage} />
    </div>
  );
};

export default App;
