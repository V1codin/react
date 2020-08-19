import React from "react";
import { connect } from "react-redux";

import styles from "./styles.module.css";
import Button from "../button/Button";
import setts from "./components/setts/setts.json";

import NoNumber from "./components/noNumber";

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

  if (warningObj === []) return null;

  const closeBtn = () => {
    closeWarning([...warningObj, warningObj.pop()]);
  };

  return (
    <>
      {warningObj.map((item) => {
        return (
          <div className={styles.parent} key={item}>
            <div className={styles.container}>
              <NoNumber title={setts[item]} />
              <Button
                onClick={closeBtn}
                className="warning__closeBtn"
                title="Зрозуміло"
              />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Warning);
