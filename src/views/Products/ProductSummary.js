import React from 'react'
import { Table } from "reactstrap";

const ProductSummary = ({ product }) => {
  return (
    // <div>
    //   <Table responsive>
    //     <tbody>
    //       <tr>
    //         <td>{product.code}</td>
    //         <td>{product.name}</td>
    //       </tr>
    //     </tbody>
    //   </Table>
    // </div>


    // <div>
    //   <tr key={product.id}>
    //     <td>{product.code}</td>
    //     <td>{product.name}</td>
    //     <td>{product.authorFirstName}</td>
    //   </tr>
    // </div>

    <div>
      <tr>
        <td key={product.code}>{product.code}</td>
        <td key={product.name}>{product.name}</td>
        <td key={product.authorFirstName}>{product.authorFirstName}</td>
        <td key={product.category}>{product.category}</td>
        <td key={product.description}>{product.description}</td>
        <td key={product.material}>{product.material}</td>
        <td key={product.price}>{product.price}</td>
        <td key={product.stock}>{product.stock}</td>
      </tr>
    </div>

  )
}

export default ProductSummary