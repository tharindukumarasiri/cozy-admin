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
                  <th>code</th>
                  <th>name</th>
                  <th>category</th>
                  <th>material</th>
                  <th>description</th>
                  <th>price</th>
                  <th>stock</th>
                </tr>
              </thead>

              {this.props.products.map(product => (
                <tbody>
                  <tr key={product.id}>
                    <td>{product.code}</td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.material}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td>{product.stock}</td>
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