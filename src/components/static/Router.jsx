import React from "react";
import { Switch, Route } from "react-router-dom";
import SingleTrack from "../blocks/history-cointainer/components/tracking/components/singleTrack/";
import SingleLocation from "../blocks/history-cointainer/components/branchLoc/components/singleLocation/";
import Main from "../Main";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/track/:id" component={SingleTrack} />
      <Route exact path="/location/:id" component={SingleLocation} />
    </Switch>
  );
}
