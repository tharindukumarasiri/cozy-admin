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
    <div>
      <td>{product.code}</td>
      <td>{product.name}</td>
      <td>{product.authorFirstName}</td>
    </div>
  )
}

export default ProductSummary