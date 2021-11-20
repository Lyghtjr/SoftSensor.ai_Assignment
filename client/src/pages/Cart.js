import React from 'react'
import { useSelector } from 'react-redux'
import '../Styles/cart.css'
import {Link} from 'react-router-dom'
import Product from '../components/Product'

const Cart = () => {
    const cart = useSelector(state => state.cart)
    
    return (
        <div className="cart">
         <div style={{display:"flex",justifyContent:'flex-end',marginRight:'30px'}}>
        <Link to="/"><button className="cart-btn">Continue Shopping</button></Link>
        </div>
        {cart.products.length > 0 ? cart.products.map(product=>(      
        <Product product={product.product} key={product.product.id} show={false} />
        )) : 
        <h1 className="no-cart-text">No Product added yet.....</h1>}
        
        </div>
    )
}

export default Cart
