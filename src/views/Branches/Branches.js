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

      branches: [],

      //Model
      add: false
    }
    this.createBranch = this.createBranch.bind(this);
    this.toggleAdd = this.toggleAdd.bind(this);
  }

  componentDidMount() {
    this.db = firebase.database();
    this.listenForChange();
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

  listenForChange() {
    this.db.ref('branches').on('child_added', snapshot => {
      let branch = {
        id: snapshot.key,
        code: snapshot.val().code,
        name: snapshot.val().name,
        number: snapshot.val().number,
        address: snapshot.val().address,
        email: snapshot.val().email,
        maps: snapshot.val().maps,
      }

      let branches = this.state.branches;
      branches.push(branch);

      this.setState({
        branches: branches
      });
    });
    this.db.ref('branches').on('child_removed', snapshot => {
      let branches = this.state.branches;
      branches = branches.filter(branche => branche.id !== snapshot.key);

      this.setState({
        branches: branches
      });
    });

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
          <CardHeader >
            <i className="fa fa-align-justify"></i> Branches
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
                  <th>Maps</th>
                  <th>Remove Branch</th>
                </tr>
              </thead>

              {this.state.branches.map(branch => (
                <tbody>
                  <tr key={branch.id}>
                    <td>{branch.code}</td>
                    <td>{branch.name}</td>
                    <td>{branch.number}</td>
                    <td>{branch.address}</td>
                    <td>{branch.email}</td>
                    <td>{branch.maps}</td>
                    <td>
                      {/* <Button color="ghost-danger" onClick={() => this.removeProduct(product.id)}><i className="icon-close"></i></Button> */}
                      <Modal
                        {...this.props}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        isOpen={this.state.edit} toggle={this.toggleEdit} >
                        <ModalHeader toggle={this.toggleEdit}>
                          Edit Product Details
                        </ModalHeader>
                        <ModalFooter>
                          <Button color="primary" type="reset" onClick={this.createCategory}>Add</Button>{' '}
                          <Button color="secondary" onClick={this.toggleEdit}>Cancel</Button>
                        </ModalFooter>
                      </Modal>
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>

          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Branches;
