import React from "react";
import styles from "./Header.module.css";
import { ReactComponent as Logo } from "../../src/icons/line-chart.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Logo className={styles.logo} />
        <span>Stocksy</span>
      </div>
      <div className={styles.userContainer}>
        <div className={styles.user}>K</div>
        <span>Kzee</span>
      </div>
    </header>
  );
};

export default Header;
