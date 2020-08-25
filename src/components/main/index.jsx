import React, { useState } from "react";
import styles from "./styles.module.css";
import { connect } from "react-redux";

import { AppContext } from "../../system/Context";

import InputContainer from "../blocks/input-container";
import Selector from "../modules/select";
import RequestFacede from "../../system/Request/RequestFacade";
import Valid from "../../system/Valid/Validation";
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

  const request = new RequestFacede();
  const validObj = new Valid();

  const selectorBtn = () => {
    if (Object.keys(selectState).length > 0) {
      for (let key in selectState) {
        if (selectState[key] === true) {
          switch (key) {
            case "tracking":
              const checkNumber = validObj.validateNumber(userData.number);
              if (checkNumber === true) {
                request.tracking(userData).then((r) => {
                  if (r) {
                    const { data } = r;
                    setTrackRes(data[0]);
                  } else {
                    initWarning("noNumberWarning");
                  }
                });
              } else {
                initWarning(checkNumber);
              }
              break;
            case "branchLoc":
              const checkBranch = validObj.validationBranch(
                userData.branchCity,
                userData.branchNumber
              );
              if (checkBranch === true) {
                request.branchLoc(userData).then((res) => {
                  if (res) {
                    setBranchLoc(res);
                  } else {
                    initWarning("incorrectCityBranchWarning");
                  }
                });
              } else {
                initWarning(checkBranch);
              }
              break;
            case "cost":
              const checkCost = validObj.validationCost(
                userData.sender,
                userData.recipient,
                userData.deliveryWeight
              );
              if (checkCost === true) {
                request.cost(userData).then(({ data }) => {
                  if (data) {
                    setDeliveryCost({
                      ...deliveryCostRes,
                      cost: data[0],
                    });
                  } else {
                    initWarning("noCostDataWarning");
                  }
                });
              } else {
                initWarning(checkCost);
              }
              break;
            default:
              setState({ ...state, isSelect: false });
          }
        }
      }

      setState({ ...state, isSelect: !state.isSelect, isOut: true });
      setSelect({
        tracking: false,
        branchLoc: false,
        cost: false,
      });
    }
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
