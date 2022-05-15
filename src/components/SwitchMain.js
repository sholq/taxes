import {memo} from "react";
import {Route, Switch} from "react-router-dom";
import Main from "./Main";
import PageNotFound from "./PageNotFound";

const SwitchMain = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/amount=:amount">
        <Main />
      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  )
});

export default SwitchMain;
