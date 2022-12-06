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
          Our group originates from the Philippines. We are reputable web developers and 
          designers with a great love for both technology and design. With more than 5 
          years of combined expertise in a variety of creative disciplines, we are product 
          designers, experience designers, and multidisciplinary creators.
          </p>
        </div>
        <div>
          <img src="/what.svg" alt="" />
          <span>What we do?</span>
          <p>
          Our areas of expertise include full-stack development, UI/UX, and the creation 
          of sophisticated and expert web applications. Along with photo editing, image 
          cropping, and other graphic design services, we also provide branding and identity 
          design services, including the creation of logos, letterhead, and business cards.
          </p>
        </div>
        <div>
          <img src="/why.svg" alt="" />
          <span>Why choose us?</span>
          <p>
          We are fueled by high energy levels and boundless enthusiasm. We are easily inspired 
          and more than willing to follow different fascinations. We have passionate, expressive, 
          multi-talented spirit with a natural ability to entertain and inspire. We have the utmost 
          expertise to design and develop websites upon the request of our beloved clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
