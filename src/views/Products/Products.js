import React, { Component } from "react";
import ProductList from './ProductList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table
} from "reactstrap";

class Products extends Component {
  render() {
    // console.log(this.props);
    const { products } = this.props;
    return (
      <div className="animated fadeIn">
        {/* <Card> */}
        {/* <Row> */}
          {/* <Col xs="12" sm="6" md="4"> */}
          <section>
          {/* <Card> */}
            <ProductList products={products} />
            </section>
          {/* </Card> */}
          {/* </Col> */}
        {/* </Row> */}
        {/* </Card> */}
        {/* <Card>
          <CardHeader>
            <i className="fa fa-align-justify" /> Furniture
          </CardHeader>
          <CardBody>
          
            <Table responsive>
              <thead>
                <tr>
                  <th>Product Code</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Material</th>
                  <th>Timber</th>
                  <th>Colour</th>
                  <th>Description</th>
                  <th>Price(Rs.)</th>
                  <th>Stock</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><ProductList products={products} /></td>
                  
                </tr>
                <tr>
                  <td>Estavan Lykos</td>
                  <td>2012/02/01</td>
                  <td>Staff</td>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td>
                    <Badge color="danger">Out of stock</Badge>
                  </td>
                </tr>
                <tr>
                  <td>Chetan Mohamed</td>
                  <td>2012/02/01</td>
                  <td>Admin</td>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td>
                    <Badge color="danger">Out of stock</Badge>
                  </td>
                </tr>
                <tr>
                  <td>Derick Maximinus</td>
                  <td>2012/03/01</td>
                  <td>Member</td>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td>
                    <Badge color="danger">Out of stock</Badge>
                  </td>
                </tr>
                <tr>
                  <td>Friderik Dávid</td>
                  <td>2012/01/21</td>
                  <td>Staff</td>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td>
                    <Badge color="success">Available</Badge>
                  </td>
                </tr>
              </tbody>
            </Table>
              <Pagination>
                <PaginationItem>
                  <PaginationLink previous tag="button" />
                </PaginationItem>
                <PaginationItem active>
                  <PaginationLink tag="button">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink tag="button">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink tag="button">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink tag="button">4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink next tag="button" />
                </PaginationItem>
              </Pagination>
          </CardBody>
        </Card> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    products: state.firestore.ordered.products
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'products' }
  ])
)(Products);

// export default connect(mapStateToProps)(Products);