import React from "react";
import styles from "./styles.module.css";

function Header() {
  return (
    <header className={styles.__header}>
      <h1 className={styles.__article}>Todo App</h1>
    </header>
  );
}

export default Header;
