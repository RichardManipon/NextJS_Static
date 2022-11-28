import stylecontact from "../styles/Contact.module.css";
import styles from "../styles/App.module.css";

import Navbar from "/components/Navbar";
import Menu from "/components/Menu";

import { useState } from "react";

const Contact = () => {
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
      <section className={stylecontact.contactbg} id="contact">
        <div>
          <h1 className={stylecontact.h1}>Get in touch</h1>
          <p className={stylecontact.p}>
            We are open to any opportunities, our inbox is always open. Do you
            want to say hi or need help? Feel free to message us.
          </p>
          <form
            action="https://formsubmit.co/richard.manipon@gsfe.tupcavite.edu.ph"
            method="post"
          >
            <div className={stylecontact.inputdiv}>
              <span className={stylecontact.inputspan}>Name</span>
              <input type="text" name="" id="" />
            </div>
            <div className={stylecontact.inputdiv}>
              <span className={stylecontact.inputspan}>Email</span>
              <input type="text" name="" id="" />
            </div>
            <div className={stylecontact.inputdiv}>
              <span className={stylecontact.inputspan}>Subject</span>
              <input type="text" name="" id="" />
            </div>
            <div className={stylecontact.inputdiv}>
              <span className={stylecontact.inputspan}>Message</span>
              <textarea name="message" id="" cols="30" rows="10"></textarea>
            </div>
            <input className={stylecontact.send} type="submit" value="Send" />
          </form>
        </div>
      </section>
      <div className={stylecontact.copyright}>
        <p>@ 2022 Iskulbukul | NextJS</p>
        <a
          href="https://github.com/RichardManipon/NextJS_Static"
          target="_blank"
        >
          <img src="/github.svg" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
