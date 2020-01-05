import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import classname from "classname";
import { connect } from "react-redux";
import NavBrand from "./NavBrand";
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      burgerShow: false
    };
  }
  burgerClicked = event => {
    event.preventDefault();
    const b = this.state.burgerShow;
    this.setState({
      burgerShow: !b
    });
  };

  render() {
    return (
      <nav className="navbar is-spaced has-shadow">
        <div className="container">
          {/* brand */}
          <NavBrand burgerClicked={this.burgerClicked} />
          {/* content */}
          <div
            id="navbar-content"
            className={classname("navbar-menu", {
              "is-active": this.state.burgerShow
            })}
          >
            <div className="navbar-start">
              <Link className="navbar-item" to="/">
                主页
              </Link>
            </div>
            <div className="navbar-end"></div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(withRouter(Nav));
