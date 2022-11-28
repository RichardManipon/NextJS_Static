import styles from "../styles/Home.module.css";

const Home = () => {
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
        <a href="/contact" className={styles.contactbtn1}>
          <div></div>
          <span>Contact Us</span>
          <img src="/arrowright.svg" alt="" />
        </a>
      </div>
      {/* <img className={styles.hero} src="/Hero.svg" alt="" /> */}
    </div>
  );
};

export default Home;
