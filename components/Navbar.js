import styles from "../styles/Navbar.module.css";
import router from "next/router";
import Link from "next/link";

const Navbar = ({ setHamburgerMenu, page, setPage }) => {
  const handleHomeLink = (e) => {
    e.preventDefault();
    setPage(true);
    setTimeout(() => {
      router.push("/");
      setPage(false);
    }, 2000);
  };
  const handleAboutLink = (e) => {
    e.preventDefault();
    setPage(true);
    setTimeout(() => {
      router.push("/about");
      setPage(false);
    }, 2000);
  };
  const handleContactLink = (e) => {
    e.preventDefault();
    setPage(true);
    setTimeout(() => {
      router.push("/contact");
      setPage(false);
    }, 2000);
  };
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">Iskulbukul</Link>
      </div>
      <ul className={styles.links}>
        <li>
          <Link href="/" onClick={handleHomeLink}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={handleAboutLink}>
            About
          </Link>
        </li>
        <li>
          <Link href="#contact" onClick={handleContactLink}>
            Contact
          </Link>
        </li>
      </ul>
      <button
        className={styles.hamburger}
        onClick={() => setHamburgerMenu(true)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;
