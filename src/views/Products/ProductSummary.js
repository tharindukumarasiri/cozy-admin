import React from 'react'

const ProductSummary = ({product}) => {
  return (
    <div>
      {/* <tr>
      <td>{product.id}</td>
          <td>{product.title}</td>
          <td>{product.content}</td>
      </tr> */}
      <p>{product.code}</p>
      <p>{product.name}</p>
    </div>
  )
}

export default ProductSummary