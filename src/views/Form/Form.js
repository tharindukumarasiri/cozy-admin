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
} from 'reactstrap';

class Forms extends Component {

  state = {
    code: '',
    name: '',
    price: '',
    material: '',
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
  }
  handleOptionChange = changeEvent => {
    this.setState({
      material: changeEvent.target.value
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Form action="" method="post" encType="multipart/form-data" className="form-horizontal" onSubmit={this.handleSubmit}>
          <Card>
            <CardHeader>
              <strong>Input Furniture Details</strong>
            </CardHeader>
            <CardBody>

              <FormGroup row>
                <Col md="2">
                  <Label htmlFor="text-input">Product Code</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="text" id="code" placeholder="Product Code" onChange={this.handleChange} />
                  <FormText color="muted">Please enter a unique code</FormText>
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
                  <Input type="select" name="select" id="select">
                    <option value="0">Please select</option>
                    <option value="1">Mahogany</option>
                    <option value="2">Teak</option>
                    <option value="3">Mara</option>
                  </Input>
                </Col>
                <Col xs="6" md="2">
                  <Button block color="secondary"> Edit </Button>
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
                  </Input>
                </Col>
                <Col xs="6" md="2">
                  <Button block color="secondary"> Edit </Button>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="2">
                  <Label htmlFor="textarea-input">Description</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                    placeholder="Please add a short description" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="2">
                  <Label htmlFor="text-input">Price</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="text" id="price" placeholder="Rs." onChange={this.handleChange} />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="2">
                  <Label>Stocks</Label>
                </Col>
                <Col md="9">
                  <FormGroup check inline>
                    <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="option1" />
                    <Label className="form-check-label" check htmlFor="inline-radio1">Available</Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" value="option2" />
                    <Label className="form-check-label" check htmlFor="inline-radio2">Out of Stock</Label>
                  </FormGroup>
                </Col>
              </FormGroup>


            </CardBody>
            <CardFooter>
              <Button type="submit" size="sm" color="primary" >Submit</Button>
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
