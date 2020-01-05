import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.scss";
import "semantic-ui-css/semantic.min.css";

import Home from "./pages/Home";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
}

export default App;
