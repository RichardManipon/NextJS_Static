import styles from "../styles/Process.module.css";
// import Image from "next/image";

const Proccess = () => {
  return (
    <section className={styles.processintro}>
      <div className={styles.flexprocess}>
        <div className={styles.text}>
          <span className={styles.spanintro}>How we work</span>
          <h2 className={styles.h2}>The 3 steps of our development process</h2>
          <p className={styles.p}>
            Iskulbukul follow 3 major steps for the development of our websites
            and applications. The projects consist of Planning, Designing, and
            Development processes to fulfill and accomplish the requests of our
            clients.
          </p>
          <img className={styles.img} src="/process.svg" alt=""  />
        </div>
        <div className={styles.processes}>
          <div>
            <span className={styles.number}>1</span>
            <div>
              <span className={styles.processspan}>Planning</span>
              <p className={styles.p}>
                Iskulbukul is always establishing goals and objectives for a
                specific time frame, coming up with potential courses of action,
                and then selecting the best course of action among the available
                options.
              </p>
            </div>
          </div>
          <div>
            <span className={styles.number}>2</span>
            <div>
              <span className={styles.processspan}>Designing</span>
              <p className={styles.p}>
                Iskulbukul always use different color's, layout, font, and
                images, mostly from scratch. We use Photoshop, Illustrator,
                Fireworks, and Sketch for implementing designs and visuals for
                the applications. We are 100% sure that are designs are unique
                and engaging for our clients.
              </p>
            </div>
          </div>
          <div>
            <span className={styles.number}>3</span>
            <div>
              <span className={styles.processspan}>Development</span>
              <p className={styles.p}>
                Iskulbukul always plan and decide ahead of time for the
                development of their projects. Here at Iskulbukul, we always
                work as a team to finish tasks commissioned by our clients. Our
                projects can range from a simple static page of plain text to
                complex web applications, electronic businesses, and social
                network services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proccess;
