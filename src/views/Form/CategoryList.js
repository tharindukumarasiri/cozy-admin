import React, { Component } from 'react';
import Form from './Form';
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

export class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: ''
        }

    }
    onChangeHandler(evt, key) {
        this.setState({
            [key]: evt.target.value
        });
        console.log(this.state.category);
    }
    
    render() {
        return (
            <section>
                <Input type="select" id="category" onChange={(evt) => this.onChangeHandler(evt, 'category')}>
                    <option value="0">Please select</option>
                    {this.props.categoryList.map(category => (
                        <option key={category.id} value={category.id} >{category.name}</option>
                    ))}
                    {/* <Form category={this.state.category} /> */}
                </Input>
            </section>
        );
    }
}

export default CategoryList;