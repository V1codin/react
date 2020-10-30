import React, { useState, useLayoutEffect } from "react";
import { connect } from "react-redux";
import { AppContext } from "../../system/Context";
import { mainAction } from "./mainAction";

import styles from "./styles.module.css";
import InputContainer from "../blocks/InputContainer";
import OutContainer from "../blocks/OutputContainer";
import HistoryContainer from "../blocks/HistoryCointainer";
import Selector from "../modules/Select";

const mapDispatchToProps = (dispatch) => {
  return {
    addTrack: (number) => {
      return dispatch({
        type: "HISTORY_ADD_TRACK",
        number,
      });
    },

    addBranchLoc: (branchLoc) => {
      return dispatch({
        type: "HISTORY_ADD_BRANCH_LOC",
        location: branchLoc,
      });
    },

    addDeliveryCost: (deliveryCost) => {
      return dispatch({
        type: "HISTORY_ADD_DELIVERY_COST",
        cost: deliveryCost,
      });
    },

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
    clearInputData: () => {
      return dispatch({
        type: "CLEAR_INPUT",
      });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    userData: state.inputData,
    warningObj: state.reducerWarning,
    historyObj: state.history,
  };
};

function Main(props) {
  const {
    initWarning,
    userData,
    clear,
    addTrack,
    historyObj,
    addBranchLoc,
    addDeliveryCost,
    clearInputData,
  } = props;

  const [state, setState] = useState({
    isSelect: false,
    isOut: false,
  });

  const [selectState, setSelect] = useState({
    tracking: false,
    branchLoc: false,
    cost: false,
  });

  const [costState, setCostState] = useState({
    defaultSend: "Місто відправлення",
    selectSend: "Місто відправлення",
    refSend: "",

    defaultRecipient: "Місто отримування",
    selectRecipient: "Місто отримування",
    refRec: "",
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

      addTrack,
      historyObj,
      addBranchLoc,
      addDeliveryCost,
    });

    setSelect({
      tracking: false,
      branchLoc: false,
      cost: false,
    });
  };
  useLayoutEffect(() => {
    clearInputData();
    // eslint-disable-next-line
  }, []);

  const initFn = () => {
    if (!state.isSelect) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    setState({ ...state, isSelect: !state.isSelect });
  };

  const clearFn = () => {
    clear();
    clearInputData();
    setState({
      isSelect: false,
      isOut: false,
    });

    localStorage.clear();

    setBranchLoc(null);
    setTrackRes(null);
    setDeliveryCost({
      sender: "",
      reciver: "",
      cost: [],
    });
    setCostState({
      defaultSend: "Місто відправлення",
      selectSend: "Місто відправлення",
      refSend: "",

      defaultRecipient: "Місто отримування",
      selectRecipient: "Місто отримування",
      refRec: "",
    });
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

          costState,
          setCostState,
        }}
      >
        <InputContainer />
        <OutContainer checker={state.isOut} />
        <HistoryContainer />
        <Selector checker={state.isSelect} />
      </AppContext.Provider>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
