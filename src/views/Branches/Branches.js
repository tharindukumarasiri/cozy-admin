import React, { Component } from "react";
import * as firebase from 'firebase';
import {
  Button,
  Input,
  Label,
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "reactstrap";

class Branches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      name: '',
      number: '',
      address: '',
      email: '',
      maps: '',

      //Model
      add: false,
    }
    this.createBranch = this.createBranch.bind(this);
    this.toggleAdd = this.toggleAdd.bind(this);
  }

  onChangeHandler(evt, key) {
    // const { name, value } = evt.target;
    // let formErrors = { ...this.state.formErrors };

    this.setState({
      [key]: evt.target.value
    });

    // switch (name) {
    //   case "code":
    //     formErrors.code =
    //       value.length < 4 ? "minimum 4 characaters required" : "";
    //     break;
    //   case "price":
    //     formErrors.price = priceRegex.test(value)
    //       ? ""
    //       : "invalid price value";
    //     break;
    //   default:
    //     break;
    // }
    // this.setState({ formErrors, [name]: value });
  }

  createBranch() {
    if (this.state.code !== '' && this.state.name !== '') {
      firebase.database().ref('branches').push({
        code: this.state.code,
        name: this.state.name,
        number: this.state.number,
        address: this.state.address,
        email: this.state.email,
        maps: this.state.maps
      })
      this.toggleAdd();
    }
  }

  //Model
  toggleAdd() {
    this.setState({
      add: !this.state.add,
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Col xs="6" sm="4" md="3" xl="2">
          <Button block onClick={this.toggleAdd} color="success"> Add New </Button>
          <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            isOpen={this.state.add} toggle={this.toggleAdd} >
            <ModalHeader toggle={this.toggleAdd}>Add New Branch</ModalHeader>
            <ModalBody>
              <Label htmlFor="text-input">Branch Code</Label>
              <Input type="text" id="code" onChange={(evt) => this.onChangeHandler(evt, 'code')} />
              <Label htmlFor="text-input">Name</Label>
              <Input type="text" id="name" onChange={(evt) => this.onChangeHandler(evt, 'name')} />
              <Label htmlFor="text-input">Contact Number</Label>
              <Input type="text" id="number" onChange={(evt) => this.onChangeHandler(evt, 'number')} />
              <Label htmlFor="text-input">Address</Label>
              <Input type="text" id="address" onChange={(evt) => this.onChangeHandler(evt, 'address')} />
              <Label htmlFor="text-input">Email</Label>
              <Input type="email" id="email" onChange={(evt) => this.onChangeHandler(evt, 'email')} />
              <Label htmlFor="text-input">Google maps link</Label>
              <Input type="text" id="maps" onChange={(evt) => this.onChangeHandler(evt, 'maps')} />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" type="reset" onClick={this.createBranch}>Add</Button>{' '}
              <Button color="secondary" onClick={this.toggleAdd}>Cancel</Button>
            </ModalFooter>
          </Modal>
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
