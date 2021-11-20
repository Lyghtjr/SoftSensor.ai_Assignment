import React,{useState} from 'react'
import '../Styles/product.css'
import {useDispatch} from 'react-redux'
import { addProduct } from '../reducers/CartReducer';
import { Link } from 'react-router-dom';
import { ReactComponent as CartIcon } from "../assets/cart-outline.svg"

const Product = ({product, id,show}) => {
    const dispatch = useDispatch();
    const [addItem, setAddItem] = useState(false);
    
const handleClick = () =>{
    dispatch(addProduct({product}));
    alert("Product added to cart")
    setAddItem(true);
}


    return (
        <div className="column">
          <div className="card">
          <p className="product_category">{product.category}</p>
          <img src={product.image} alt="..." className="product_image"/>
          <div className="title">
          <h3 className="product_title">{product.title}</h3>
          </div>
          <div className="description">
          <p className="product_description">{product.description}</p>
          </div>      
          <div className="flex">
           
            <p className="product_price">$ {product.price}</p>
            </div>
            {
              addItem ? (
                <center>
            <Link to="/cart">
            <button className="cart_button">View Cart</button>
          </Link>
          </center>
              ):(
               <div>
                 {
                   show ? (
                <center>
              <button
            className="cart_button" 
            onClick={handleClick}
          >
            <CartIcon style={{width:"25px"}}></CartIcon>
            <span style={{marginLeft:'5px'}}>Add To Cart</span>
          </button>
          </center>):(
            <center>
            <button
          className="cart_button" 
        >
          <CartIcon style={{width:"25px"}}></CartIcon>
          <span style={{marginLeft:'5px'}}>Buy now</span>
        </button>
        </center>
          )
}
          </div>
              )
            }
            
          </div>
        </div>
       
    )
}

export default Product
