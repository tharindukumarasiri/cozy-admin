import React, { Component } from 'react';
import * as firebase from 'firebase';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Table
} from 'reactstrap';

export class ProductsView extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <section>
        <Card>
          <CardHeader >
            <i className="fa fa-align-justify"></i> Product List
            </CardHeader>
          <CardBody>
            <Table responsive>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Code</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Material</th>
                  <th>Description</th>
                  <th>Price (Rs.)</th>
                  <th>Stock</th>
                  <th>Options</th>
                </tr>
              </thead>

              {this.props.products.map(product => (
                <tbody>
                  <tr key={product.id}>
                    <img src={product.image} border="3" height="100" width="100"></img>
                    <td>{product.code}</td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.material}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td>{product.stock}</td>
                    <td>
                      <Button color="ghost-success"><i className="icon-pencil"></i></Button>
                      <Button color="ghost-danger"><i className="icon-close"></i></Button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>

          </CardBody>
        </Card>
      </section>
    );
  }
}

export default ProductsView;