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
      </tr>
    </div>

  )
}

export default ProductSummary