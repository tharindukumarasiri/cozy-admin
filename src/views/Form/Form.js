import React, { Component } from 'react';
import * as firebase from 'firebase';
import FileUploader from "react-firebase-file-uploader";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from 'reactstrap';

const priceRegex = RegExp(
  /[0-9]/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //product details
      code: '',
      name: '',
      material: '',
      stock: '',
      price: '',
      description: '',
      category: '',

      //category drop down
      categoryName: '',

      //image uploads
      avatar: "",
      isUploading: false,
      progress: 0,
      image: "",

      isUploadingItem: false,
      progressItem: 0,
      item: "",

      isUploadingCategory: false,
      progressCategory: 0,
      imageCategory: "",

      //for modules
      submit: false,
      catModel: false,
      colModel: false,
      timModel: false,

      //category list poulating
      categoryList: [],

      //For error catching 
      formErrors: {
        code: '',
        price: ''
      }
    }

    this.createProduct = this.createProduct.bind(this);
    this.createCategory = this.createCategory.bind(this);
    this.toggleSubmit = this.toggleSubmit.bind(this);
    this.toggleCat = this.toggleCat.bind(this);
    this.toggleTim = this.toggleTim.bind(this);
    this.toggleCol = this.toggleCol.bind(this);
  }

  componentDidMount() {
    this.db = firebase.database();
    this.listenForChange();
  }

  onChangeHandler(evt, key) {
    const { name, value } = evt.target;
    let formErrors = { ...this.state.formErrors };

    this.setState({
      [key]: evt.target.value
    });

    switch (name) {
      case "code":
        formErrors.code =
          value.length < 4 ? "minimum 4 characaters required" : "";
        break;
      case "price":
        formErrors.price = priceRegex.test(value)
          ? ""
          : "invalid price value";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  }

  createProduct() {
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

  createCategory() {
    if (this.state.categoryName !== '') {
      firebase.database().ref('categories').push({
        name: this.state.categoryName,
        image: this.state.imageCategory
      })
      this.toggleCat();
      this.setState({ imageCategory: "" });
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

  //uploading category image
  handleUploadStartCategory = () => this.setState({ isUploadingCategory: true, progressCategory: 0 });
  handleProgressCategory = progressCategory => this.setState({ progressCategory });
  handleUploadErrorCategory = error => {
    this.setState({ isUploadingCategory: false });
    console.error(error);
  };
  handleUploadSuccessCategory = filename => {
    this.setState({ avatar: filename, progressCategory: 100, isUploadingCategory: false });
    firebase
      .storage()
      .ref("categories")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ imageCategory: url }))
  };

  //handling popup models
  toggleSubmit() {
    this.setState({
      submit: !this.state.submit,
    });
  }
  toggleCat() {
    this.setState({
      catModel: !this.state.catModel,
    });
  }
  toggleTim() {
    this.setState({
      timModel: !this.state.timModel,
    });
  }
  toggleCol() {
    this.setState({
      colModel: !this.state.colModel,
    });
  }

  //populating category list
  listenForChange() {
    this.db.ref('categories').on('child_added', snapshot => {
      let category = {
        id: snapshot.key,
        name: snapshot.val().name
      }

      let categoryList = this.state.categoryList;
      categoryList.push(category);

      this.setState({
        categoryList: categoryList
      });
      console.log(categoryList);

    });

  }

  render() {
    const { formErrors } = this.state;

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
                  <Input
                    className={formErrors.code.length > 0 ? "error" : null}
                    type="text"
                    id="code"
                    name="code"
                    placeholder="Product Code"
                    onChange={(evt) => this.onChangeHandler(evt, 'code')}
                  />
                  {formErrors.code.length > 0 && (
                    <span className="errorMessage">{formErrors.code}</span>
                  )}
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
                <Col xs="12" md="7">
                  <Input type="select" id="category" onChange={(evt) => this.onChangeHandler(evt, 'category')}>
                    <option value="0">Please select</option>
                    {this.state.categoryList.map(category => (
                      <option key={category.id} value={category.id} >{category.name}</option>
                    ))}
                  </Input>
                </Col>
                <Col xs="6" md="2">
                  <Button block onClick={this.toggleCat} color="secondary" className="mr-1"> Edit </Button>
                  <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    isOpen={this.state.catModel} toggle={this.toggleCat} >
                    <ModalHeader toggle={this.toggleCat}>Add New Category</ModalHeader>
                    <ModalBody>
                      <Label htmlFor="text-input">Category Name</Label>
                      <Input type="text" id="categoryName" onChange={(evt) => this.onChangeHandler(evt, 'categoryName')} />
                      <Label htmlFor="text-input">Upload Category Image</Label> <br></br>
                      {this.state.isUploadingCategory && <p>Progress: {this.state.progressCategory}</p>}
                      {this.state.imageCategory && <img src={this.state.imageCategory} border="3" height="100" width="100" />}
                      <FileUploader
                        accept="image/*"
                        name="avatar"
                        randomizeFilename
                        storageRef={firebase.storage().ref("categories")}
                        onUploadStart={this.handleUploadStartCategory}
                        onUploadError={this.handleUploadErrorCategory}
                        onUploadSuccess={this.handleUploadSuccessCategory}
                        onProgress={this.handleProgressCategory}
                      />
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" type="reset" onClick={this.createCategory}>Add</Button>{' '}
                      <Button color="secondary" onClick={this.toggleCat}>Cancel</Button>
                    </ModalFooter>
                  </Modal>
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
                  <Button block onClick={this.toggleTim} color="secondary" className="mr-1"> Edit </Button>
                  <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    isOpen={this.state.timModel} toggle={this.toggleTim} >
                    <ModalHeader toggle={this.toggleTim}>Add New Wood Type</ModalHeader>
                    <ModalBody>
                      <Label htmlFor="text-input">Timber Name</Label>
                      <Input type="text" id="" />
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" type="reset" >Add</Button>{' '}
                      <Button color="secondary" onClick={this.toggleTim}>Cancel</Button>
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
                  <Button block onClick={this.toggleCol} color="secondary" className="mr-1"> Edit </Button>
                  <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    isOpen={this.state.colModel} toggle={this.toggleCol} >
                    <ModalHeader toggle={this.toggleCol}>Add New Colour</ModalHeader>
                    <ModalBody>
                      <Label htmlFor="text-input">Colour</Label>
                      <Input type="text" id="" />
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" type="reset" >Add</Button>{' '}
                      <Button color="secondary" onClick={this.toggleCol}>Cancel</Button>
                    </ModalFooter>
                  </Modal>
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
                <Col xs="12" md="9">
                  {/* <div className="controls"> */}
                    <InputGroup className="input-prepend">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Rs.</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className={formErrors.price.length > 0 ? "error" : null}
                        id="price"
                        // size="16"
                        type="number"
                        name="price"
                        onChange={(evt) => this.onChangeHandler(evt, 'price')}
                      />
                    </InputGroup>
                    {formErrors.price.length > 0 && (
                        <span className="errorMessage">{formErrors.price}</span>
                      )}
                  {/* </div> */}
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
                    onUploadStart={this.handleUploadStartItem}
                    onUploadError={this.handleUploadErrorItem}
                    onUploadSuccess={this.handleUploadSuccessItem}
                    onProgress={this.handleProgressItem}
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
                  <Button color="success" form="myform" type="reset" onClick={this.createProduct}>Save</Button>{' '}
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

export default Forms;
