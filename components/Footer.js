import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.text}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <h1 className={styles.h1}> Let us work together.</h1>
        <div className={styles.circle3}></div>
      </div>
      <p className={styles.p}>
        We are open to any opportunities, our inbox is always open. Do you want
        to say hi or need help? Feel free to message us.
      </p>
      <a href="#contact" className={styles.contactbtn1}>
        <div></div>
        <span>Contact Us</span>
        <img src="/arrowright.svg" alt="" />
      </a>
      <div className={styles.copyright}>
        <p>@ 2022 Iskulbukul | NextJS</p>
        <a
          href="https://github.com/RichardManipon/NextJS_Static"
          target="_blank"
        >
          <img src="/github.svg" alt="" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
