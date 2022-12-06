import styles from "../styles/Home.module.css";
import router from "next/router";
import Link from "next/link";
// import Image from "next/image";

const Home = ({ setPage }) => {
  const handleContactLink = (e) => {
    e.preventDefault();
    setPage(true);
    setTimeout(() => {
      router.push("/contact");
      setPage(false);
    }, 950);
  };
  return (
    <div className={styles.home} id="home">
      <div className={styles.text}>
        <h1 className={styles.h1}>
          <div className={styles.circle1}></div> Design and Develop Website with
          Purpose. <div className={styles.circle2}></div>
        </h1>
        <p className={styles.p}>
          Iskulbukul is a development and design specialist team that offers
          organizations all over the world outstanding software, web, mobile,
          and creative designing solutions and services.
        </p>
        <Link
          href="/contact"
          onClick={handleContactLink}
          className={styles.contactbtn1}
        >
          <div></div>
          <span>Contact Us</span>
          <img src="/arrowright.svg" alt="" />
        </Link>
      </div>
      {/* <img className={styles.hero} src="/Hero.svg" alt="" /> */}
    </div>
  );
};

export default Home;
