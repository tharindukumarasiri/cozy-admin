import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createProduct } from '../../store/actions/productActions'

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
  ModalHeader
} from 'reactstrap';

class Forms extends Component {

  state = {
    code: '',
    name: '',
    price: '',
    material: '',
    description: '',
    category: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProduct(this.state);
    document.getElementById("myform").reset();
  }
  handleOptionChange = changeEvent => {
    this.setState({
      material: changeEvent.target.value
    });
  }
  handleStockChange = changeEvent => {
    this.setState({
      stock: changeEvent.target.value
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      large: false,
      info: false,
    };

    this.toggle = this.toggle.bind(this);
    this.toggleInfo = this.toggleInfo.bind(this);
    this.toggleLarge = this.toggleLarge.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal,

    });
  }
  toggleLarge() {
    this.setState({
      large: !this.state.large,
    });
  }
  toggleInfo() {
    this.setState({
      info: !this.state.info,
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Form id="myform" action="" method="post" encType="multipart/form-data" className="form-horizontal" onSubmit={this.handleSubmit}>
          <Card>
            <CardHeader>
              <strong>Insert Furniture Details</strong>
            </CardHeader>
            <CardBody>
              <FormGroup row>
                <Col md="2">
                  <Label htmlFor="text-input">Product Code</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="text" id="code" placeholder="Product Code" onChange={this.handleChange} />
                  <FormText color="muted">Please enter the unique code in catalogue</FormText>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="2">
                  <Label htmlFor="text-input">Product Name</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="text" id="name" placeholder="Product Name" onChange={this.handleChange} />
                  <FormText color="muted">Name as in the catalogue</FormText>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="2">
                  <Label htmlFor="select">Category</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="select" id="category" onChange={this.handleChange}>
                    <option value="0">Please select</option>
                    <option value="Living">Living</option>
                    <option value="Dining">Dining</option>
                    <option value="Bedroom">Bedroom</option>
                    <option value="Patio">Patio Furniture</option>
                    <option value="Other">Other</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="2">
                  <Label>Material</Label>
                </Col>
                <Col md="9">
                  <FormGroup check inline>
                    <Input className="form-check-input" type="radio" id="wood" name="material" value="Wood" checked={this.state.material === 'Wood'} onChange={this.handleOptionChange} />
                    <Label className="form-check-label" check htmlFor="wood">Wood</Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Input className="form-check-input" type="radio" id="plastic" name="material" value="Plastic" checked={this.state.material === 'Plastic'} onChange={this.handleOptionChange} />
                    <Label className="form-check-label" check htmlFor="plastic">Plastic</Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Input className="form-check-input" type="radio" id="metal" name="material" value="Metal" checked={this.state.material === 'Metal'} onChange={this.handleOptionChange} />
                    <Label className="form-check-label" check htmlFor="metal">Metal</Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Input className="form-check-input" type="radio" id="other" name="material" value="Other" checked={this.state.material === 'Other'} onChange={this.handleOptionChange} />
                    <Label className="form-check-label" check htmlFor="other">Other</Label>
                  </FormGroup>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="2" xs="2">
                  <Label htmlFor="select">Timber</Label>
                </Col>
                <Col xs="12" md="7">
                  <Input type="select" name="select" id="select" disabled={this.state.material !== 'Wood'} >
                    <option value="0">Please select</option>
                    <option value="1">Mahogany</option>
                    <option value="2">Teak</option>
                    <option value="3">Mara</option>
                  </Input>
                </Col>
                <Col xs="6" md="2">
                  <Button block color="secondary" onClick={this.toggleLarge} className="mr-1"> Edit </Button>
                  <Modal isOpen={this.state.large} toggle={this.toggleLarge} className={'modal-lg ' + this.props.className}>
                    <ModalHeader toggle={this.toggleLarge}>Edit Timber Types</ModalHeader>
                    <ModalBody>
                      <Input type="text" placeholder="Timber" /><br></br>
                      Mahogany <br></br>
                      Teak<br></br>
                      Mara<br></br>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" >Add</Button>
                      <Button color="success" onClick={this.toggleLarge}>Save</Button>{' '}
                      <Button color="secondary" onClick={this.toggleLarge}>Cancel</Button>
                    </ModalFooter>
                  </Modal>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="2" xs="2">
                  <Label htmlFor="select">Colour</Label>
                </Col>
                <Col xs="12" md="7">
                  <Input type="select" name="select" id="select">
                    <option value="0">Please select</option>
                    <option value="1">Mara</option>
                    <option value="2">Mahogany</option>
                    <option value="3">Teak</option>
                    <option value="4">White</option>
                    <option value="5">Black</option>
                    <option value="6">Red</option>
                  </Input>
                </Col>
                <Col xs="6" md="2">
                  <Button block color="secondary" onClick={this.toggle} className="mr-1"> Edit </Button>
                  <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Edit Colours</ModalHeader>
                    <ModalBody>
                      <Input type="text" placeholder="Colour" /><br></br>
                      Mahogany <br></br>
                      Teak<br></br>
                      Mara<br></br>
                      Black<br></br>
                      White<br></br>
                      Red<br></br>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" >Add</Button>
                      <Button color="success" onClick={this.toggle}>Save</Button>{' '}
                      <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                  </Modal>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="2">
                  <Label htmlFor="textarea-input">Description</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="textarea" id="description" rows="6" placeholder="Please add a short description" onChange={this.handleChange} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="2">
                  <Label htmlFor="prependedInput">Price</Label>
                </Col>
                <Col md="6">
                  <div className="controls">
                    <InputGroup className="input-prepend">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Rs.</InputGroupText>
                      </InputGroupAddon>
                      <Input id="price" size="16" type="text" onChange={this.handleChange} />
                    </InputGroup>
                  </div>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="2">
                  <Label>Stocks</Label>
                </Col>
                <Col md="9">
                  <FormGroup check inline>
                    <Input className="form-check-input" type="radio" id="available" name="stocks" value="Available" checked={this.state.stock === 'Available'} onChange={this.handleStockChange} />
                    <Label className="form-check-label" check htmlFor="available">Available</Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Input className="form-check-input" type="radio" id="notavailable" name="stocks" value="Not Available" checked={this.state.stock === 'Not Available'} onChange={this.handleStockChange} />
                    <Label className="form-check-label" check htmlFor="notavailable">Out of Stock</Label>
                  </FormGroup>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="2">
                  <Label htmlFor="file-multiple-input">Upload Pictures</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="file" id="file-multiple-input" name="file-multiple-input" multiple />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="2">
                  <Label htmlFor="file-multiple-input">Upload 3D Model</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="file" id="file-multiple-input" name="file-multiple-input" />
                </Col>
              </FormGroup>
            </CardBody>
            <CardFooter>
              <Button size="sm" color="primary" onClick={this.toggleInfo} className="mr-2" >Submit</Button>
              <Modal isOpen={this.state.info} toggle={this.toggleInfo} className={'modal-info ' + this.props.className}>
                <ModalHeader toggle={this.toggleInfo}>Are You Sure You Want To Save</ModalHeader>
                <ModalFooter>
                  <Col md="2">
                    <Button type="submit" form="myform" color="success" onClick={this.toggleInfo}>Yes</Button>{' '}
                  </Col>
                  <Col md="6">
                    <Button color="danger" onClick={this.toggleInfo}>Cancel</Button>
                  </Col>
                </ModalFooter>
              </Modal>
              <Button type="reset" size="sm" color="danger"> Cancel</Button>
            </CardFooter>
          </Card>
        </Form>

      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProduct: (product) => dispatch(createProduct(product))
  }
}

export default connect(null, mapDispatchToProps)(Forms);
