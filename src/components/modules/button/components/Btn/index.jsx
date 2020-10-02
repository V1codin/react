import React from "react";

import styles from "./styles.module.css";
import PropTypes from "prop-types";

Btn.propTypes = {
  className: PropTypes.any.isRequired,
  classList: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default function Btn({ className, onClick, title, classList }) {
  if (classList) {
    let classNameArr = className.split(" ");

    const resNames = classNameArr.reduce(
      (ac, item) => (ac += `${styles[item]} `),
      ""
    );

    return (
      <button type="button" onClick={onClick} className={resNames}>
        {title}
      </button>
    );
  } else {
    return (
      <button type="button" onClick={onClick} className={styles[className]}>
        {title}
      </button>
    );
  }
}
