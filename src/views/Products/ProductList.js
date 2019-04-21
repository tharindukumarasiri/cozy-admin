import React from 'react'
import ProductSummary from './ProductSummary'

const ProductList = ({products}) => {
    return (
      <div>
          
        { products && products.map(product => {
          return (
            <ProductSummary product={product} key={product.id} />
          )
        })}  
      </div>
    )
  }
  
  export default ProductList