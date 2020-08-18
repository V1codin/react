import React, { useState } from "react";
import styles from "./styles.module.css";

import InputContainer from "../blocks/input-container";

import Selector from "../modules/select";
import RequestFacede from "../../system/Request/RequestFacade";
import Valid from "../../system/Valid/Validation";

import OutContainer from "../blocks/output-container";

import ResContext from "../../system/Context";

//59000527233015

function App() {
  const [state, setState] = useState({
    number: "",
    isSelect: false,
    isOut: false,
  });
  const [selectState, setSelect] = useState({});

  const [trackRes, setTrack] = useState({});

  const request = new RequestFacede();
  const validObj = new Valid();

  const selectorBtn = () => {
    const checkNumber = validObj.validateNumber(state.number);
    if (checkNumber && Object.keys(selectState).length > 0) {
      for (let key in selectState) {
        if (selectState[key] === true) {
          switch (key) {
            case "tracking":
              request.tracking(state).then(({ data }) => {
                setTrack(data[0]);
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
    setState({ ...state, number: "", isOut: false, isSelect: false });
  };
  return (
    <div className={styles.container__wrapper}>
      <InputContainer
        setState={setState}
        state={state}
        initBtn={initFn}
        clearBtn={clear}
      />
      <ResContext.Provider value={trackRes}>
        <OutContainer checker={state.isOut} />
      </ResContext.Provider>
      <Selector
        checker={state.isSelect}
        state={selectState}
        stateFn={setSelect}
        selectBtn={selectorBtn}
      />
    </div>
  );
}

export default App;
