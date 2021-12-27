import React from "react";
import { connect } from "react-redux";
import { fetchProducts, addToCart } from "../../redux/actions";
import Input from "../input/Input";
import Container from "../container/Container";
import Product from "../product/Product";
import "./productslist.scss"

class ProductsList extends React.Component {

  state = {
    searchWord: ""
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  listProducts = (products) => {
    return products.map( (product) => {
      return (
        <Product key={product.id} product={product} /> 
      )
    })
  }

  handleSearch = (event) => {
    event.preventDefault();
    this.setState({searchWord: event.target.value})
  }

  render() {

    const filtered = this.props.state.products.filter((product) => {
      return product.title.toLowerCase().includes(this.state.searchWord);
    });
    
    return (
        <Container>
          <Input handleSearch={this.handleSearch} />
          <div className="products">
    
            {this.props.state.products ? (
              this.listProducts(filtered)
            ) : (
              <p>não foi possível carregar os produtos, tente atualizar a página.</p>
            )}
          </div>
        </Container>
    );
  }
}

const stateProps = (state) => {
  return {
    state: state,
  };
};

export default connect(stateProps, {
  fetchProducts: fetchProducts,
  addToCart: addToCart
})(ProductsList);
