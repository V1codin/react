import React from "react";

import styles from "./styles.module.css";
import PropTypes from "prop-types";

Btn.propTypes = {
  className: PropTypes.any,
  classList: PropTypes.bool,
  onClick: PropTypes.func,
};

export default function Btn({ className, onClick, data }) {
  return (
    <span
      type="button"
      onClick={onClick}
      className={styles[className]}
      data={data}
    ></span>
  );
}
