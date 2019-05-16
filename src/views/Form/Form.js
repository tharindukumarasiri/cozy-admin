import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createProduct } from '../../store/actions/productActions'
import * as firebase from 'firebase';
import FileUploader from "react-firebase-file-uploader";
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

  // constructor () {
  //   super();
  //   this.state = {
  //     title: '',
  //     note: ''
  //   }

  //   this.createNote = this.createNote.bind(this);
  // }

  // onChangeHandler (evt, key) {
  //   this.setState({
  //     [key]: evt.target.value
  //   });
  // }

  // createNote () {
  //   if (this.state.title !== '' && this.state.note !== '') {
  //     firebase.database().ref('notes').push({
  //       title: this.state.title,
  //       note: this.state.note
  //     })
  //   }
  // }

  //   render() {
  //     return (
  //       <div>
  //         <h3>Create New Note</h3>
  //         <div className="form-group">
  //           <label htmlFor="noteform-title">Title</label>
  //           <input type="text" id="noteform-title" name="noteform-title" value={this.state.title} onChange={(evt) => this.onChangeHandler(evt, 'title')} />
  //         </div>
  //         <div className="form-group">
  //           <label htmlFor="noteform-note">Note</label>
  //           <textarea name="noteform-note" id="noteform-note" value={this.state.note} onChange={(evt) => this.onChangeHandler(evt, 'note')}></textarea>
  //         </div>
  //         <button onClick={this.createNote}>Create Note</button>
  //       </div>
  //     )
  //   }
  // }

  // export default Forms;









  constructor(props) {
    super(props);
    this.state = {
      code: '',
      name: '',
      material: '',
      stock: '',
      price: '',
      description: '',
      category: '',

      avatar: "",
      isUploading: false,
      progress: 0,
      image: "",

      isUploadingItem: false,
      progressItem: 0,
      item: "",

      submit: false

    }

    this.createNote = this.createNote.bind(this);

    this.toggleSubmit = this.toggleSubmit.bind(this);
  }

  onChangeHandler(evt, key) {
    this.setState({
      [key]: evt.target.value
    });
  }

  createNote() {
    if (this.state.code !== '' && this.state.name !== '') {
      firebase.database().ref('products').push({
        code: this.state.code,
        name: this.state.name,
        material: this.state.material,
        stock: this.state.stock,
        price: this.state.price,
        description: this.state.description,
        category: this.state.category,
        image: this.state.image,
        model: this.state.item
      })
      this.toggleSubmit();
      this.setState({ image: "" });
    }
  }


  //Uploading Image
  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadSuccess = filename => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ image: url }));
  };

  //uploading 3D Model item
  handleUploadStartItem = () => this.setState({ isUploadingItem: true, progressItem: 0 });
  handleProgressItem = progressItem => this.setState({ progressItem });
  handleUploadErrorItem = error => {
    this.setState({ isUploadingItem: false });
    console.error(error);
  };
  handleUploadSuccessItem = filename => {
    this.setState({ avatar: filename, progress: 100, isUploadingItem: false });
    firebase
      .storage()
      .ref("models")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ item: url }))
  };

  //handling popup models
  toggleSubmit() {
    this.setState({
      submit: !this.state.submit,
    });
  }
  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.id]: e.target.value
  //   })
  // }
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   // console.log(this.state);
  //   this.props.createProduct(this.state);
  //   document.getElementById("myform").reset();
  // }
  // handleOptionChange = changeEvent => {
  //   this.setState({
  //     material: changeEvent.target.value
  //   });
  // }
  // handleStockChange = changeEvent => {
  //   this.setState({
  //     stock: changeEvent.target.value
  //   });
  // }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     modal: false,
  //     large: false,
  //     info: false,
  //   };

  //   this.toggle = this.toggle.bind(this);
  //   this.toggleInfo = this.toggleInfo.bind(this);
  //   this.toggleLarge = this.toggleLarge.bind(this);
  // }
  // toggle() {
  //   this.setState({
  //     modal: !this.state.modal,

  //   });
  // }
  // toggleLarge() {
  //   this.setState({
  //     large: !this.state.large,
  //   });
  // }
  // toggleInfo() {
  //   this.setState({
  //     info: !this.state.info,
  //   });
  // }

  render() {
    return (
      <div className="animated fadeIn">
        <Form id="myform" action="" encType="multipart/form-data" className="form-horizontal" >
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
                  <Input type="text" id="code" placeholder="Product Code" onChange={(evt) => this.onChangeHandler(evt, 'code')} />
                  <FormText color="muted">Please enter the unique code in catalogue</FormText>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="2">
                  <Label htmlFor="text-input">Product Name</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="text" id="name" placeholder="Product Name" onChange={(evt) => this.onChangeHandler(evt, 'name')} />
                  <FormText color="muted">Name as in the catalogue</FormText>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="2">
                  <Label htmlFor="select">Category</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="select" id="category" onChange={(evt) => this.onChangeHandler(evt, 'category')}>
                    <option value="0">Please select</option>
                    <option value="cat1">cat1</option>
                    <option value="cat2">cat2</option>
                    <option value="cat3">cat3</option>
                    <option value="cat4">cat4</option>
                    <option value="cat5">cat5</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="2">
                  <Label>Material</Label>
                </Col>
                <Col md="9">
                  <FormGroup check inline>
                    <Input className="form-check-input" type="radio" id="wood" name="material" value="Wood" checked={this.state.material === 'Wood'} onChange={(evt) => this.onChangeHandler(evt, 'material')} />
                    <Label className="form-check-label" check htmlFor="wood">Wood</Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Input className="form-check-input" type="radio" id="plastic" name="material" value="Plastic" checked={this.state.material === 'Plastic'} onChange={(evt) => this.onChangeHandler(evt, 'material')} />
                    <Label className="form-check-label" check htmlFor="plastic">Plastic</Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Input className="form-check-input" type="radio" id="metal" name="material" value="Metal" checked={this.state.material === 'Metal'} onChange={(evt) => this.onChangeHandler(evt, 'material')} />
                    <Label className="form-check-label" check htmlFor="metal">Metal</Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Input className="form-check-input" type="radio" id="other" name="material" value="Other" checked={this.state.material === 'Other'} onChange={(evt) => this.onChangeHandler(evt, 'material')} />
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
                  <Button block color="secondary" className="mr-1"> Edit </Button>
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
                  <Button block color="secondary" className="mr-1"> Edit </Button>
                  {/* <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
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
                  </Modal> */}
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="2">
                  <Label htmlFor="textarea-input">Description</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="textarea" id="description" rows="6" placeholder="Please add a short description" onChange={(evt) => this.onChangeHandler(evt, 'description')} />
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
                      <Input id="price" size="16" type="text" onChange={(evt) => this.onChangeHandler(evt, 'price')} />
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
                    <Input className="form-check-input" type="radio" id="available" name="stocks" value="Available" checked={this.state.stock === 'Available'} onChange={(evt) => this.onChangeHandler(evt, 'stock')} />
                    <Label className="form-check-label" check htmlFor="available">Available</Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Input className="form-check-input" type="radio" id="notavailable" name="stocks" value="Not Available" checked={this.state.stock === 'Not Available'} onChange={(evt) => this.onChangeHandler(evt, 'stock')} />
                    <Label className="form-check-label" check htmlFor="notavailable">Out of Stock</Label>
                  </FormGroup>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="2">
                  <Label htmlFor="file-multiple-input">Upload Picture</Label>
                </Col>
                <Col xs="12" md="9">
                  {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
                  {this.state.image && <img src={this.state.image} border="3" height="100" width="100" />}
                  <FileUploader
                    accept="image/*"
                    name="avatar"
                    randomizeFilename
                    storageRef={firebase.storage().ref("images")}
                    onUploadStart={this.handleUploadStart}
                    onUploadError={this.handleUploadError}
                    onUploadSuccess={this.handleUploadSuccess}
                    onProgress={this.handleProgress}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="2">
                  <Label htmlFor="file-multiple-input">Upload 3D Model</Label>
                </Col>
                <Col xs="12" md="9">
                  {this.state.isUploadingItem && <p>Progress: {this.state.progressItem}</p>}
                  <FileUploader
                    accept="image/*"
                    name="avatar"
                    randomizeFilename
                    storageRef={firebase.storage().ref("models")}
                    onUploadStartItem={this.handleUploadStartItem}
                    onUploadErrorItem={this.handleUploadErrorItem}
                    onUploadSuccessItem={this.handleUploadSuccessItem}
                    onProgressItem={this.handleProgressItem}
                  />
                </Col>
              </FormGroup>
            </CardBody>
            <CardFooter>
              <Button size="sm" onClick={this.toggleSubmit} color="primary" className="mr-2" >Submit</Button>
              <Modal 
                {...this.props}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered 
                isOpen={this.state.submit} toggle={this.toggleSubmit} >
                <ModalHeader toggle={this.toggleSubmit}>Are you Sure!</ModalHeader>
                <ModalFooter>
                  <Button color="success" form="myform" type="reset" onClick={this.createNote}>Save</Button>{' '}
                  <Button color="secondary" onClick={this.toggleSubmit}>Cancel</Button>
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

// const mapDispatchToProps = dispatch => {
//   return {
//     createProduct: (product) => dispatch(createProduct(product))
//   }
// }

export default Forms;
