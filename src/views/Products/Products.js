import React, { Component } from "react";
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
    return (
      <div className="animated fadeIn">
        <Card>
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
                  <td>Samppa Nori</td>
                  <td>2012/01/01</td>
                  <td>Member</td>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td>
                    <Badge color="success">Available</Badge>
                  </td>
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
        </Card>
      </div>
    );
  }
}

export default Products;
