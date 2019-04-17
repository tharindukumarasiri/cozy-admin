import React, { Component } from "react";
import {
  Button,
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

class Branches extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Col xs="6" sm="4" md="3" xl="2">
          <Button block color="success">
            Add New
          </Button>
        </Col>
        <br />

        <Card>
          <CardHeader>
            <i className="fa fa-align-justify" /> Branches
          </CardHeader>
          <CardBody>
            <Table responsive>
              <thead>
                <tr>
                  <th>Branch Code</th>
                  <th>Name</th>
                  <th>Contact Number</th>
                  <th>Address</th>
                  <th>Email</th>
                  <th>Google Maps</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Samppa Nori</td>
                  <td>2012/01/01</td>
                  <td>Member</td>
                </tr>
                <tr>
                  <td>Estavan Lykos</td>
                  <td>2012/02/01</td>
                  <td>Staff</td>
                </tr>
                <tr>
                  <td>Chetan Mohamed</td>
                  <td>2012/02/01</td>
                  <td>Admin</td>
                </tr>
                <tr>
                  <td>Derick Maximinus</td>
                  <td>2012/03/01</td>
                  <td>Member</td>
                </tr>
                <tr>
                  <td>Friderik Dávid</td>
                  <td>2012/01/21</td>
                  <td>Staff</td>
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

export default Branches;
