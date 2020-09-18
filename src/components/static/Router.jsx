import React from "react";
import { Switch, Route } from "react-router-dom";
import TrackRes from "../blocks/history-cointainer/components/tracking/components/singleTrack/";
import Main from "../Main";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/track/:id" component={TrackRes} />
    </Switch>
  );
}
