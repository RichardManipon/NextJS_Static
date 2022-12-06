import styles from "../styles/Goal.module.css";
// import img from "next/img";

const Goal = () => {
  return (
    <section className={styles.goal} id="goals">
      <div className={styles.remarkable}>
        <div className={styles.text}>
          <span className={styles.spanintro}>What we do</span>
          <h2>We build remarkable applications</h2>
          <p className={styles.p}>
            We&aposre unique. We offer unique access to a professional development
            team with a click. Iskulbukul specializes in end-to-end website
            development services. We're taking away the fear of getting
            stranded, lack of communication, and unneeded expenses. We will even
            train you if you wish to learn yourself. Our mission is clear,
            deliver quick, easy, rapid, transparent, and economical services
            without compromising quality.
          </p>
        </div>
        <img src="/remarkable.svg" alt=""  />
      </div>
      <div className={styles.row}>
        <div className={styles.text}>
          <h4 className={styles.span}>Animation</h4>
          <p className={styles.p}>
            Iskulbukul is a well-known name in the field of producing excellent,
            captivating, and expert animations for businesses and individuals.
            We have a track record of delivering hundreds of visual content that
            have been successful in grabbing the audience's attention in the
            appropriate way. We are successful in connecting the audience to
            your company's core beliefs and inspiring a favorable feeling that
            will eventually lead to them trying out your goods and services.
          </p>
        </div>
        <img src="/goal1.svg" alt="" />
      </div>
      <div className={styles.row}>
        <div className={styles.text}>
          <h4 className={styles.span}>Business</h4>
          <p className={styles.p}>
            Iskulbukul seeks trustworthy content to provide global
            market-competitive materials. Philippines' leading agile innovators
            and application designers. Scrum and creative thinking help us meet
            our clients' needs. We can build large AWS-based SaaS applications
            and custom corporate websites. Our portfolio includes SaaS
            marketplace systems, eCommerce websites, golf course management
            systems, courier service mobile apps, inventory systems, real estate
            websites, and hotel booking systems.
          </p>
        </div>
        <img src="/goal2.svg" alt="" />
      </div>
      <div className={styles.row}>
        <div className={styles.text}>
          <h4 className={styles.span}>Design</h4>
          <p className={styles.p}>
            Our organization is special. We are the only significant web design
            and development firm where the business owners both create the work
            and act as the client's first point of contact. This represents our
            belief that great design requires passion, intelligence, and—above
            all—personal devotion. 
          </p>
        </div>
        <img src="/goal3.svg" alt="" />
      </div>
    </section>
  );
};

export default Goal;
