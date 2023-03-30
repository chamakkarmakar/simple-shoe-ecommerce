import React from 'react'
import "./Shop.css"

const Product = ({product,handleAddToCart}) => {
    return (
        <div className='product'>
            <img src={product.img} alt={product.name} />
            <div className='product-info'>
                <h6 className='product-name'>{product.name}</h6>
                <p><b>Price:</b> ${product.price}</p>
                <p><b>Manufacturer:</b> {product.seller}</p>
                <p>Rating: {product.ratings} Stars</p>
            </div>
            <button onClick={() => handleAddToCart()} className='btn-cart'>
                Add to Cart
            </button>
        </div>
    
  )
}

export default Product
