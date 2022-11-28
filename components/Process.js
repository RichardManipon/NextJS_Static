import styles from "../styles/Process.module.css";

const Proccess = () => {
  return (
    <section className={styles.processintro}>
      <div className={styles.flexprocess}>
        <div className={styles.text}>
          <span className={styles.spanintro}>How we work</span>
          <h2 className={styles.h2}>The 3 steps of our development process</h2>
          <p className={styles.p}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
            explicabo quos consequatur accusantium praesentium aliquam, quae
            minima perspiciatis suscipit accusamus.
          </p>
          <img className={styles.img} src="/process.svg" alt="" />
        </div>
        <div className={styles.processes}>
          <div>
            <span className={styles.number}>1</span>
            <div>
              <span>Planning</span>
              <p className={styles.p}>
                Lorem ipsum dolor sit amet consectetur. Ut turpis elementum
                ipsum mauris sapien odio. Enim fames suspendisse quis vel
                dignissim sed vitae urna.
              </p>
            </div>
          </div>
          <div>
            <span className={styles.number}>2</span>
            <div>
              <span>Designing</span>
              <p className={styles.p}>
                Lorem ipsum dolor sit amet consectetur. Ut turpis elementum
                ipsum mauris sapien odio. Enim fames suspendisse quis vel
                dignissim sed vitae urna.
              </p>
            </div>
          </div>
          <div>
            <span className={styles.number}>3</span>
            <div>
              <span>Development</span>
              <p className={styles.p}>
                Lorem ipsum dolor sit amet consectetur. Ut turpis elementum
                ipsum mauris sapien odio. Enim fames suspendisse quis vel
                dignissim sed vitae urna.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proccess;
