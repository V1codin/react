import React from "react";
import styles from "./styles.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className={styles.__footer}>
      <div className={styles.__iconWrapper}>
        <a
          href="https://www.youtube.com/"
          target="_blank
"
        >
          <FontAwesomeIcon
            icon={faYoutube}
            className={styles.__icons + " " + styles.__icons_y}
          />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank
"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className={styles.__icons + " " + styles.__icons_f}
          />
        </a>
        <a
          href="https://twitter.com/home"
          target="_blank
"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className={styles.__icons + " " + styles.__icons_t}
          />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank
"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className={styles.__icons + " " + styles.__icons_I}
          />
        </a>
      </div>

      <p className={styles.__topic}>My custom footer (c) </p>
    </footer>
  );
}

export default Footer;

/*
 borderColor="#001aff82"
          borderWidth="5"
          borderStyle="solid"
          icon="facebook"
          iconColor="rgba(255,255,255,1)"
          backgroundColor="rgba(141,154,157,1)"
          iconSize="5"
          roundness="50%"
          url="https://www.facebook.com/"
          size="40"
          */
