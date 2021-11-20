import React,{useEffect} from 'react'
import '../Styles/navbar.css';
import logo from "../assets/logo.png";
import {Link} from 'react-router-dom';
const Nav = () => {

  const myFunction = () =>{
    var x = document.getElementById("myTopnav")
   if(x.className === "topnav"){
     x.className += " responsive";
   }else{
     x.className = "topnav";
   }
  }

    return (
        <div className="topnav" id="myTopnav">
         <Link to="/">
          <img style={{width:'135px'}} src={logo} alt="logo" />
        </Link>
       <Link to="/" className="active">Home</Link>

  <Link to="/cart"><i className="fa fa-shopping-cart"></i> Cart</Link>
  <a className="icon" onClick={myFunction}>
    <i className="fa fa-bars"></i>
  </a>
</div>
    )
}



export default Nav
