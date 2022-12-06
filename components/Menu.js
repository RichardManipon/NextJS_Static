import styles from "../styles/Menu.module.css";
import Link from "next/link";

const Menu = ({ setHamburgerMenu }) => {
  return (
    <div className={styles.menu}>
      <div className={styles.hamburgerdiv}>
        <button
          className={styles.hamburger}
          onClick={() => setHamburgerMenu(false)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <ul className={styles.links}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
