import React, { Component } from "react";
import styled from "styled-components";

const NavBrandComponent = styled.div`
  padding-right: 10px;
`;

class NavBrand extends Component {
  render() {
    return (
      <NavBrandComponent className="navbar-brand">
        <a className="navbar-item" href="https://baidu.com">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="logo"
            width="112"
            height="28"
          />
        </a>
        <a
          className="navbar-burger burger"
          data-target="navbar-content"
          href="/"
          onClick={() => {
            const b = this.state.burgerShow;
            this.setState({
              burgerShow: !b
            });
          }}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </NavBrandComponent>
    );
  }
}

export default NavBrand;
