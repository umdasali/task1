import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./componnents/Login";
import Home from "./componnents/Home";
import Test from "./componnents/Test";
import DataProvider from "./Provider/DataProvider";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Switch>
        <DataProvider>
        <Route exact path="/" component={Login}/>
        <Route path="/home" component={Home}/>
        <Route path="/test" component={Test}/>
        </DataProvider>
      </Switch>
      </BrowserRouter>
    </React.Fragment>
    
  );
}

export default App;
