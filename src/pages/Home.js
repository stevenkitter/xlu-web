import React, { Component } from "react";
import PropTypes from "prop-types";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home">
        <button className="btn">主页</button>
      </div>
    );
  }
}

Home.propTypes = {
  UserId: PropTypes.string
};

export default Home;
