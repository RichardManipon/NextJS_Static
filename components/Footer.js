import styles from "../styles/Footer.module.css";
import router from "next/router";
import Link from "next/link";
import Image from "next/image";

const Footer = ({ setPage }) => {
  const handleContactLink = (e) => {
    e.preventDefault();
    setPage(true);
    setTimeout(() => {
      router.push("/contact");
      setPage(false);
    }, 950);
  };
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
      <Link
        href="/contact"
        onClick={handleContactLink}
        className={styles.contactbtn1}
      >
        <div></div>
        <span>Contact Us</span>
        <Image src="/arrowright.svg" alt="" />
      </Link>
      <div className={styles.copyright}>
        <p>@ 2022 Iskulbukul | NextJS</p>
        <a
          href="https://github.com/RichardManipon/NextJS_Static"
          target="_blank"
        >
          <Image src="/github.svg" alt="" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
