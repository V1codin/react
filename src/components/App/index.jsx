import React from "react";
import styles from "./styles.module.css";

import Main from "../Main";
import Header from "../Static/Header";
import Footer from "../Static/Footer";

function App() {
  return (
    <div className={styles.container__wrapper}>
      <Header />
      <main>
        <Main />
      </main>
      <Footer />
    </div>
  );
}

export default App;
