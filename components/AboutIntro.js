import styles from "../styles/AboutIntro.module.css";
import router from "next/router";
import Link from "next/link";
import Image from "next/image";

const AboutIntro = ({ setPage }) => {
  const handleContactLink = (e) => {
    e.preventDefault();
    setPage(true);
    setTimeout(() => {
      router.push("/contact");
      setPage(false);
    }, 950);
  };
  return (
    <div>
      <div className={styles.aboutintro}>
        <div className={styles.text}>
          <h1 className={styles.h1}>Meet our Excellent Team Members</h1>
          <p>
            Everyone that is a part of our team is a true professional. Our
            teams are selected with great care. We make available to you some of
            the people of our team who will be working on your project.
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
        <img className={styles.hero} src="/teamsvg.svg" alt="" />
      </div>
      <div className={styles.story}>
        <div className={styles.text}>
          <h2 className={styles.h2}>Our story</h2>
          <p>
            On May 3, 2021, Daryl Magpantay and Richard Manipon paved the way
            for what would become Iskulbukul. At the height of the worldwide
            pandemic, our team was propelled by the purpose of assisting small
            businesses by providing them with reasonably priced and high-quality
            software solutions. 
          </p>
        </div>
        <img className={styles.hero2} src="/devs.png" alt="" />
      </div>
    </div>
  );
};

export default AboutIntro;
