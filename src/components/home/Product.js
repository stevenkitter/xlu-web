import React, { Component } from "react";
import styled from "styled-components";
import XLModel from "./XLModal";
import { api } from "../../redux/apis/product";

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
  & > img {
    width: 90px;
    height: 90px;
  }
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
`;

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      pwd: ""
    };
  }

  requestData = async (title, url) => {
    const res = await api.createPwd(title, url);
    return res;
  };
  handleClick = e => {
    e.preventDefault();
    const url = "https:" + this.props.product.coupon_share_url;
    const that = this;
    const open = this.state.open;
    this.requestData(this.props.product.title, url).then(res => {
      that.setState({
        open: !open,
        pwd: res.data.model
      });
    });
  };
  closeModal = () => {
    this.setState({
      open: false
    });
  };
  componentWillUnmount() {}
  render() {
    return (
      <Container
        className="box"
        onClick={this.handleClick}
        // href={"http:" + this.props.product.coupon_share_url}
        // target="_blank"
      >
        <Icon>
          <img
            src={this.props.product.pict_url}
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
        <p className="is-size-7 has-text-danger">
          {"优惠券: ¥" + this.props.product.coupon_amount}
        </p>
        <p className="is-size-7">
          {"券后价: ¥" +
            (
              this.props.product.zk_final_price -
              this.props.product.coupon_amount
            ).toFixed(2)}
        </p>
        <Input
          type="text"
          value={this.state.pwd}
          ref={element => {
            this.input = element;
          }}
          readOnly
        />
        {this.state.open && (
          <XLModel
            open={this.state.open}
            pwd={this.state.pwd}
            close={this.closeModal}
          />
        )}
      </Container>
    );
  }
}

export default Product;
