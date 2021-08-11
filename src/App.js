import React from "react";
import { Route, Switch } from "react-router-dom";
import UserDetails from "./Pages/UserDetails";
import Error from "./Pages/Error";
import "antd/dist/antd.css";
const App = (props) => {
  return(
    <>
        <Switch>
          <Route exact path="/" component={UserDetails} />
          <Route component={Error} />
        </Switch>
    </>
  )
}

export default App;
