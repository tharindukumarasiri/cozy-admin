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
    this.state = {
      edit: false,
      remove: false
    }
    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleRemove = this.toggleRemove.bind(this);
  }

  toggleEdit() {
    this.setState({
      edit: !this.state.edit,
    });
  }

  toggleRemove() {
    this.setState({
      remove: !this.state.remove,
    });
  }

  removeProduct(id) {
    firebase.database().ref('products').child(id).remove();
    this.toggleRemove();
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
                      <Button color="ghost-success" onClick={this.toggleEdit}><i className="icon-pencil"></i></Button>
                      <Button color="ghost-danger" onClick={() => this.removeProduct(product.id)}><i className="icon-close"></i></Button>
                      <Modal
                        {...this.props}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        isOpen={this.state.edit} toggle={this.toggleEdit} >
                        <ModalHeader toggle={this.toggleEdit}>
                        Edit Product Details 
                        <FormText color="muted">You cannot edit product code, category, material, colour or images because they are non mutable. If you want to change them please delete the relevent item and add a new one</FormText>
                        </ModalHeader>
                        <ModalBody>
                          <Label htmlFor="text-input">Name</Label>
                          <Input type="text" id="categoryName" onChange={(evt) => this.onChangeHandler(evt, 'categoryName')} />
                          <Label htmlFor="text-input">Description</Label>
                          <Input type="text" id="categoryName" onChange={(evt) => this.onChangeHandler(evt, 'categoryName')} />
                          <Label htmlFor="text-input">Price</Label>
                          <Input type="text" id="categoryName" onChange={(evt) => this.onChangeHandler(evt, 'categoryName')} />
                          <br></br>
                          <FormGroup check inline>
                            <Input className="form-check-input" type="radio" id="available" name="stocks" value="Available" checked={this.state.stock === 'Available'} onChange={(evt) => this.onChangeHandler(evt, 'stock')} />
                            <Label className="form-check-label" check htmlFor="available">Available</Label>
                          </FormGroup>
                          <FormGroup check inline>
                            <Input className="form-check-input" type="radio" id="notavailable" name="stocks" value="Not Available" checked={this.state.stock === 'Not Available'} onChange={(evt) => this.onChangeHandler(evt, 'stock')} />
                            <Label className="form-check-label" check htmlFor="notavailable">Out of Stock</Label>
                          </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                          <Button color="primary" type="reset" onClick={this.createCategory}>Add</Button>{' '}
                          <Button color="secondary" onClick={this.toggleEdit}>Cancel</Button>
                        </ModalFooter>
                      </Modal>

                      <Modal
                        {...this.props}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        isOpen={this.state.remove} toggle={this.toggleEdit} >
                        <ModalHeader toggle={this.toggleEdit}>
                          Are you sure you want to Remove this product
                        </ModalHeader>
                        <ModalFooter>
                          <Button color="danger" onClick={() => this.removeProduct(product.id)}>Delete</Button>{' '}
                          <Button color="secondary" onClick={this.toggleRemove}>Cancel</Button>
                        </ModalFooter>
                      </Modal>
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