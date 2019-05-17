import React, { Component } from "react";
import * as firebase from 'firebase';
import ProductsView from './ProductsView';

class Products extends Component {

  constructor() {
    super();
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    this.db = firebase.database();
    this.listenForChange();
  }

  listenForChange() {
    this.db.ref('products').on('child_added', snapshot => {
      let product = {
        id: snapshot.key,
        image: snapshot.val().image,
        code: snapshot.val().code,
        name: snapshot.val().name,
        material: snapshot.val().material,
        stock: snapshot.val().stock,
        price: snapshot.val().price,
        description: snapshot.val().description,
        category: snapshot.val().category,
      }

      let products = this.state.products;
      products.push(product);

      this.setState({
        products: products
      });
    });
    this.db.ref('products').on('child_removed', snapshot => {
      let products = this.state.products;
      products = products.filter(product => product.id !== snapshot.key);

      this.setState({
        products: products
      });
    });

  }

  render() {
    return (
      <div className="animated fadeIn">
        <ProductsView products={this.state.products} />
      </div>
    );
  }
}

export default Products;