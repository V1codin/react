import React from "react";
import { Switch, Route } from "react-router-dom";
import SingleTrack from "../blocks/HistoryCointainer/components/Tracking/components/singleTrack";
import SingleLocation from "../blocks/HistoryCointainer/components/BranchLoc/components/singleLocation";
import SingleCost from "../blocks/HistoryCointainer/components/Cost/components/singleCost";
import Main from "../Main";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/track/:id" component={SingleTrack} />
      <Route exact path="/location/:id" component={SingleLocation} />
      <Route exact path="/cost/:id" component={SingleCost} />
    </Switch>
  );
}
