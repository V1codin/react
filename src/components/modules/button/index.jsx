import React from "react";

import PropTypes from "prop-types";

import LinkRoute from "./components/LinkRoute";
import Btn from "./components/Btn";

Button.propTypes = {
  type: PropTypes.string,
  href: PropTypes.string,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.any.isRequired,
  classList: PropTypes.bool,
};

export default function Button({
  type,
  href,
  onClick,
  title,
  className,
  classList,
}) {
  switch (type) {
    case "linkRoute": {
      return <LinkRoute href={href} title={title} className={className} />;
    }
    case "closeBtn": {
      return (
        <Btn
          classList={classList}
          onClick={onClick}
          className={className.join(" ")}
          title={title}
        />
      );
    }
    default: {
      return (
        <Btn
          onClick={onClick}
          className={className}
          title={title}
          classList={classList}
        />
      );
    }
  }
}
