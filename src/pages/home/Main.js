import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getProducts } from "../../redux/actions/index";
import Product from "../../components/home/Product";
import Labadong from "../../assets/images/labadong.gif";

const HomeMain = styled.div`
  padding: 1rem 0;
`;

const HomeMainTopFlexCenter = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: ${props => (props.marginTop ? "40px" : "0")};
`;

const HomeMainTopCenter = styled.div`
  width: 270px;
`;

const SearchContainer = styled.div``;
const Field = styled.div`
  display: flex;
  justify-content: center;
`;
const Input = styled.input`
  width: 60%;
`;
const Submit = styled.input`
  height: 2.5em;
`;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      offset: 0
    };
  }
  componentDidMount() {
    this.props.getProducts(this.state.offset, this.state.searchText);
  }
  onChange = event => {
    this.setState({ searchText: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.searchText) {
      //TODO 处理用户输入
      this.props.getProducts(this.state.offset, this.state.searchText);
      this.setState({ searchText: "" });
    }
  };
  render() {
    return (
      <HomeMain className="container">
        <HomeMainTopFlexCenter>
          <HomeMainTopCenter>
            <img src={Labadong} alt="main top" width="270" height="129" />
          </HomeMainTopCenter>
        </HomeMainTopFlexCenter>
        <SearchContainer>
          <form action="" method="post" onSubmit={this.handleSubmit}>
            <Field className="field">
              <Input
                type="text"
                className="input is-radiusless"
                placeholder="随便"
                value={this.state.searchText}
                onChange={this.onChange}
              />
              <Submit
                type="submit"
                className="button is-radiusless is-primary"
                value="搜一下"
              />
            </Field>
          </form>
        </SearchContainer>
        <HomeMainTopFlexCenter marginTop>
          {this.props.product.products.map((product, i) => {
            return <Product key={i} product={product} />;
          })}
        </HomeMainTopFlexCenter>
      </HomeMain>
    );
  }
}
function mapStateToProps(state) {
  return {
    product: state.product
  };
}
export default connect(mapStateToProps, { getProducts })(Main);
