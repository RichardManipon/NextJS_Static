import styles from "../styles/Goal.module.css";

const Goal = () => {
  return (
    <section className={styles.goal} id="goals">
      <div className={styles.row}>
        <div className={styles.text}>
          <h4 className={styles.span}>Animation</h4>
          <p>
          Iskulbukul is a well-known name in the field of producing excellent, captivating, 
          and expert animations for businesses and individuals. We have a track record of 
          delivering hundreds of visual content that have been successful in grabbing the 
          audience's attention in the appropriate way. We are successful in connecting the 
          audience to your company's core beliefs and inspiring a favorable feeling that 
          will eventually lead to them trying out your goods and services.
          </p>
        </div>
        <img src="/goal1.svg" alt="" />
      </div>
      <div className={styles.row}>
        <div className={styles.text}>
          <h4 className={styles.span}>Business</h4>
          <p>
          Iskulbukul creates material that is competitive for the worldwide market and is 
          constantly looking for reliable content sources. We are among the leading agile 
          innovators and application designers in the Philippines. We build precisely to 
          the needs of our clients by utilizing the Agile technique (Scrum) along with a 
          creative thinking style. We can handle all of your online needs, from huge Software 
          as a Service (SaaS) systems built on AWS services to custom corporate websites. Our 
          breadth of experience includes developing SaaS marketplace systems, eCommerce 
          websites, golf course management systems, mobile apps for courier services, inventory
          systems, real estate websites, and hotel booking systems, to name a few.
          </p>
        </div>
        <img src="/goal2.svg" alt="" />
      </div>
      <div className={styles.row}>
        <div className={styles.text}>
          <h4 className={styles.span}>Design</h4>
          <p>
          Our organization is special. We are the only significant web design and development firm
          where the business owners both create the work and act as the client's first point of contact.
          This represents our belief that great design requires passion, intelligence, and—above all—personal
          devotion. 
          </p>
        </div>
        <img src="/goal3.svg" alt="" />
      </div>
    </section>
  );
};

export default Goal;
