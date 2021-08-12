import React from "react";
import { Route, Switch } from "react-router-dom";
import UserDetails from "./Pages/UserDetails";
import Error from "./Pages/Error";
import "antd/dist/antd.css";
import ShowUserDetails from "./Pages/ShowUserDetails";
const App = (props) => {
  return(
    <>
        <Switch>
          <Route exact path="/" component={ShowUserDetails} />
          <Route exact path="/add-user" component={UserDetails} />
          <Route component={Error} />
        </Switch>
    </>
  )
}

export default App;
