import React, { useState, useMemo } from "react";
import { connect } from "react-redux";

import styles from "./styles.module.css";
import Button from "../button/Button";
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
    warningObj: state.reducerWarning.init,
  };
};

function Warning(props) {
  const { warningObj, closeWarning } = props;

  const raw = useMemo(() => {
    return warningObj;
  }, [warningObj]);

  const [state, setState] = useState({
    warns: [],
    close: () => {
      raw.pop();
      closeWarning();
      setState({
        ...state,
      });
    },
  });

  if (warningObj === []) return null;

  const myWarns = raw.map((item) => {
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
