import React, { Component } from "react";
import styled from "styled-components";
import Clipboard from "clipboard";
const Container = styled.a`
  margin: 0 0.3rem;
  &:last-child {
    margin-bottom: 1.5rem;
  }
`;

const Width100 = styled.p`
  width: 100px;
  position: relative;
  line-height: 1.4em;
  max-height: 4.2em;
`;

const Icon = styled.div`
  width: 100px;
  height: 100px;
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
`;

class Product extends Component {
  componentDidMount = () => {
    const button = this.button;
    const input = this.input;
    this.clipboard = new Clipboard(button, {
      target: () => input
    });
    this.clipboard.on("success", function(e) {
      // action text trigger
      alert("复制成功");
      e.clearSelection();
    });

    this.clipboard.on("error", function(e) {});
  };
  componentWillUnmount() {
    this.clipboard.destroy();
  }
  render() {
    return (
      <Container
        className="box"
        ref={element => {
          this.button = element;
        }}
      >
        <Icon>
          <img
            src={this.props.product.icon}
            alt="icon"
            width="90"
            height="90"
          />
        </Icon>
        <Width100 className="is-size-7">
          {this.props.product.title.length > 20
            ? this.props.product.title.slice(0, 20) + "..."
            : this.props.product.title}
        </Width100>
        <p className="is-size-7">
          {"优惠: ¥" + (this.props.product.coupon / 100).toFixed(2)}
        </p>
        <p className="is-size-7">
          {"折后价: ¥" + (this.props.product.reducedPrice / 100).toFixed(2)}
        </p>
        <Input
          type="text"
          value={this.props.product.share}
          ref={element => {
            this.input = element;
          }}
          readOnly
        />
      </Container>
    );
  }
}

export default Product;
