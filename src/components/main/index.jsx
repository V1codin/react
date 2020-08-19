import React, { useState } from "react";
import styles from "./styles.module.css";

import InputContainer from "../blocks/input-container";

import Selector from "../modules/select";
import RequestFacede from "../../system/Request/RequestFacade";
import Valid from "../../system/Valid/Validation";

import OutContainer from "../blocks/output-container";

import Context from "../../system/Context";

//59000527233015

function App() {
  const [state, setState] = useState({
    number: "",
    branchCity: "",
    branchNumber: "",
    isSelect: false,
    isOut: false,
  });
  const [selectState, setSelect] = useState({});

  const [trackRes, setTrackRes] = useState({});
  const [branchLocRes, setBranchLoc] = useState({});

  const request = new RequestFacede();
  const validObj = new Valid();

  const selectorBtn = () => {
    if (Object.keys(selectState).length > 0) {
      for (let key in selectState) {
        if (selectState[key] === true) {
          switch (key) {
            case "tracking":
              const checkNumber = validObj.validateNumber(state.number);
              if (checkNumber) {
                request.tracking(state).then(({ data }) => {
                  setTrackRes(data[0]);
                });
              }
              break;
            case "branchLoc":
              request.branchLoc(state).then((res) => {
                setBranchLoc(res);
              });
              break;
            default:
              setState({ ...state, isSelect: false });
          }
        }
      }
      setState({ ...state, isSelect: !state.isSelect, isOut: true });
    }
  };

  const initFn = () => {
    setState({ ...state, isSelect: !state.isSelect });
  };
  const clear = () => {
    setState({
      number: "",
      branchCity: "",
      branchNumber: "",
      isSelect: false,
      isOut: false,
    });
  };

  return (
    <div className={styles.container__wrapper}>
      <h2>{state.counter}</h2>
      <Context.Provider
        value={{
          trackRes,
          branchLocRes,

          state,
          setState,

          selectState,
          setSelect,
          selectorBtn,
        }}
      >
        <InputContainer initBtn={initFn} clearBtn={clear} />
        <OutContainer checker={state.isOut} />
        <Selector checker={state.isSelect} />
      </Context.Provider>
    </div>
  );
}

export default App;
