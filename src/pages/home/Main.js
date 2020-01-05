import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Icon, Pagination } from "semantic-ui-react";
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
      page: 1
    };
  }
  componentDidMount() {
    this.props.getProducts(this.state.page, this.state.searchText);
  }
  requestData = () => {
    this.props.getProducts(this.state.page, this.state.searchText);
  };
  onChange = event => {
    this.setState({ searchText: event.target.value });
  };
  onPageChange = (e, value) => {
    const that = this;
    this.setState({ page: value.activePage }, function() {
      that.requestData();
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.searchText) {
      //TODO 处理用户输入
      this.props.getProducts(this.state.page, this.state.searchText);
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
            return product && <Product key={i} product={product} />;
          })}
        </HomeMainTopFlexCenter>
        {this.props.product.total > 0 && (
          <Pagination
            ellipsisItem={{
              content: <Icon name="ellipsis horizontal" />,
              icon: true
            }}
            firstItem={{
              content: <Icon name="angle double left" />,
              icon: true
            }}
            lastItem={{
              content: <Icon name="angle double right" />,
              icon: true
            }}
            prevItem={{ content: <Icon name="angle left" />, icon: true }}
            nextItem={{ content: <Icon name="angle right" />, icon: true }}
            totalPages={(this.props.product.total / 20 + 1).toFixed(0)}
            activePage={this.state.page}
            onPageChange={this.onPageChange}
          />
        )}
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
