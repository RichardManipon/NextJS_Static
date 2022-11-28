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
          <img src="/who.svg" alt="" />
          <span>Who are we?</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut illo
            nisi maxime hic non minima magnam voluptates nam architecto
            consectetur?
          </p>
        </div>
        <div>
          <img src="/what.svg" alt="" />
          <span>What we do?</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut cum
            inventore, quae quas, consequuntur ducimus nesciunt, enim odit sequi
            fuga delectus debitis nostrum labore aliquam corporis illo. Tempora,
            rem harum.
          </p>
        </div>
        <div>
          <img src="/why.svg" alt="" />
          <span>Why choose us?</span>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
            dolore maiores, illo aliquid unde aspernatur. Nostrum ipsam illum
            praesentium cum facilis aliquam perferendis eligendi optio eum error
            minima, aliquid culpa?
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
