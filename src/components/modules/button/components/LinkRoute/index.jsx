import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

LinkRoute.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default function LinkRoute({ href, title, className }) {
  return (
    <Link to={href} className={className}>
      {title}
    </Link>
  );
}
