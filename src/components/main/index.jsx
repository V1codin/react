import React, { useState } from "react";
import styles from "./styles.module.css";
import { connect } from "react-redux";

import { AppContext } from "../../system/Context";

import InputContainer from "../blocks/input-container";
import Selector from "../modules/select";

import { mainAction } from "./mainAction";
import OutContainer from "../blocks/output-container";

const mapDispatchToProps = (dispatch) => {
  return {
    initWarning: (nameOfWarning) => {
      return dispatch({
        type: "INIT_WARNING",
        nameOfWarning,
      });
    },
    clear: () => {
      return dispatch({
        type: "CLEAR",
      });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    userData: state.inputData,
    warningObj: state.reducerWarning,
  };
};

function App(props) {
  const { initWarning, userData, clear } = props;

  const [state, setState] = useState({
    isSelect: false,
    isOut: false,
  });

  const [selectState, setSelect] = useState({
    tracking: false,
    branchLoc: false,
    cost: false,
  });

  const [trackRes, setTrackRes] = useState({});
  const [branchLocRes, setBranchLoc] = useState({});
  const [deliveryCostRes, setDeliveryCost] = useState({
    sender: "",
    reciver: "",
    cost: [],
  });

  const selectorBtn = () => {
    mainAction({
      selectState,
      setTrackRes,
      initWarning,
      setBranchLoc,
      setDeliveryCost,
      setState,
      userData,
      deliveryCostRes,
      state,
    });

    setSelect({
      tracking: false,
      branchLoc: false,
      cost: false,
    });
  };

  const initFn = () => {
    setState({ ...state, isSelect: !state.isSelect });
  };
  const clearFn = () => {
    clear();
    setState({
      isSelect: false,
      isOut: false,
    });
    setBranchLoc(null);
    setTrackRes(null);
  };
  return (
    <div className={styles.container__wrapper}>
      <AppContext.Provider
        value={{
          initFn,
          clearFn,

          trackRes,
          branchLocRes,
          deliveryCostRes,

          selectState,
          setSelect,
          selectorBtn,
        }}
      >
        <InputContainer />
        <OutContainer checker={state.isOut} />
        <Selector checker={state.isSelect} />
      </AppContext.Provider>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
