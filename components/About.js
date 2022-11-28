import styles from "../styles/About.module.css";
import router from "next/router";

const AboutIntro = ({ page, setPage }) => {
  const handleAboutLink = (e) => {
    e.preventDefault();
    setPage(true);
    console.log(page);
    setTimeout(() => {
      router.push("/about");
    }, 2000);
  };
  return (
    <section className={styles.aboutintro}>
      <span className={styles.spanintro}>About us</span>
      <div className={styles.flexabout}>
        <div className={styles.text}>
          <h2 className={styles.h2}>About the team</h2>
          <p>
            Everyone that is a part of our team is a true professional. Our
            teams are selected with great care. We make available to you some of
            the people of our team who will be working on your project.
          </p>
          <a
            href="/about"
            className={styles.contactbtn1}
            onClick={handleAboutLink}
          >
            <div></div>
            <span>About Us</span>
            <img src="/arrowright.svg" alt="" />
          </a>
        </div>
        <img className={styles.img} src="/devs.png" alt="" />
      </div>
      <div className={styles.msg}>
        <div>
          <span>Mission</span>
          <p>
            We are passionate, and strong driven individuals about application
            development. Our mission is to help you, and your brand be known
            effective globally.
          </p>
        </div>
        <div>
          <span>Vision</span>
          <p>
            To be one of the world’s leading software development firm with
            providing clean and interactive interfaces.
          </p>
        </div>
        <div>
          <span>Goal</span>
          <p>
            Create leads, increase traffic, engage prospects, and re-engage
            existing customers to achieve your marketing goals. Sales–
            contribute to the successful completion of sales by validating and
            supporting the communications of the sales team. Customer Service -
            Increase the level of pleasure experienced by Customers through
            Improved Service
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
