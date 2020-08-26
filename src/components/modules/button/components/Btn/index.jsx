import React from "react";

import styles from "./styles.module.css";
import PropTypes from "prop-types";

Btn.propTypes = {
  className: PropTypes.any,
  classList: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default function Btn({ className, onClick, title, classList, data }) {
  if (classList) {
    let classNameArr = className.split(" ");

    let resNames = "";

    classNameArr.map((item) => (resNames += `${styles[item]} `));

    return (
      <button type="button" onClick={onClick} className={resNames} data={data}>
        {title}
      </button>
    );
  } else {
    return (
      <button
        type="button"
        onClick={onClick}
        className={styles[className]}
        data={data}
      >
        {title}
      </button>
    );
  }
}
