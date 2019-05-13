import React from 'react'
import { Table } from "reactstrap";
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade } from 'reactstrap';

const ProductSummary = ({ product }) => {
  return (
    <div>
      {/* <tr>
        <td key={product.code}>{product.code}</td>
        <td key={product.name}>{product.name}</td>
        <td key={product.authorFirstName}>{product.authorFirstName}</td>
        <td key={product.category}>{product.category}</td>
        <td key={product.description}>{product.description}</td>
        <td key={product.material}>{product.material}</td>
        <td key={product.price}>{product.price}</td>
        <td key={product.stock}>{product.stock}</td>
      </tr> */}
      

      {/* <Col xs="12" sm="6" md="4"> */}
      
      
      <Card>
        <CardBody>
            <p>Product Code:  <strong>{product.code} </strong></p>
            <p>Name:  <strong>{product.name}</strong></p>
            <p>Admin Enterd:  <strong>{product.authorFirstName}</strong></p>
            <p>Category:  <strong>{product.category}</strong></p>
            <p>Description: <strong>{product.description}</strong></p>
            <p>Material: <strong>{product.material}</strong></p>
            <p>Price: <strong>{product.price}</strong></p>
            <p>Srock: <strong>{product.stock}</strong></p>
        </CardBody>
        
        </Card>
      
      {/* </Col> */}
      
    </div>
  )
}

export default ProductSummary