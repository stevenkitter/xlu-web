import React, { Component } from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import Nav from "../components/Nav";
import Main from "./home/Main";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home">
        <Nav />
        <Switch>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    );
  }
}

Home.propTypes = {
  UserId: PropTypes.string
};

export default Home;
