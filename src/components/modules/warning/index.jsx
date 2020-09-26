import React, { useState } from "react";
import { connect } from "react-redux";

import styles from "./styles.module.css";
import Button from "../Button";
import setts from "./components/setts/setts.json";

import Warn from "./components/Warn";

const mapDispatchToProps = (dispatch) => {
  return {
    closeWarning: () => {
      dispatch({
        type: "CLOSE_WARNING",
      });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    warningArr: state.warning.init,
  };
};

function Warning(props) {
  const { warningArr, closeWarning } = props;

  const [state, setState] = useState({
    warns: [],
    close: () => {
      closeWarning();
      setState({
        ...state,
      });
    },
  });

  if (warningArr.length === 0) return null;

  const myWarns = warningArr.map((item) => {
    return (
      <div className={styles.parent} key={item}>
        <div className={styles.container}>
          <Warn title={setts[item]} />
          <Button
            onClick={state.close}
            className="warning__closeBtn"
            title="Зрозуміло"
          />
        </div>
      </div>
    );
  });

  return <>{myWarns}</>;
}

export default connect(mapStateToProps, mapDispatchToProps)(Warning);
