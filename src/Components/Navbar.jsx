// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../Assets/Logo.png';
// import '../Styles/Home.css';
// //class -> className
// export default function NavBar() {
//     return (
//         <nav className="navbar navbar-expand-sm bg-warning navbar-light">
            

//             <ul className="navbar-nav">
//                 <li className="nav-item">

//                 <img src={logo} style={{height:50,width:50,padding:10}}></img>
//                 <a className="navbar-brand" href="#">Home Interiors</a>
           
//                 </li>
//                 <li className="nav-item">
//                     <Link className="nav-link" to="/">Home</Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link className="nav-link" to="classcom">About Us</Link>
//                 </li>
                

//             </ul>
//         </nav>
//     )
// }
import React from "react";
import { Link, Router } from "react-router-dom";
 import '../Styles/Nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";


export default function NavBar(){
    return(

        <Navbar fixed="top" expand="lg"className="navbar-custom">
      <Container>
        <Navbar.Brand  className="logo" href="#home">
        <div >
        <div><img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-logo.png" style={{height:60,width:60,padding:10}}></img> 
        <span>
            <span className="brand"><a>Haber</a></span>
             <div className="subbrand">INVESTMENT COMPANY</div>
        </span>
       </div>
        </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link className="back" style={{color: 'white'}}  as={Link} to="/">HOME</Nav.Link>
            <Nav.Link className="back" style={{color: 'white'}} href="#link">ABOUT</Nav.Link>
            <Nav.Link  className="back" style={{color: 'white'}} href="#link">SERVICES</Nav.Link>
            <Nav.Link className="back" style={{color: 'white'}} as={Link} to="api">PROJECTS</Nav.Link>
         
            <Nav.Link className="back" style={{color: 'white'}} href="#link">OUR BLOG</Nav.Link>
            <Nav.Link   className="back" style={{color: 'white'}} href="#link">CONTACTS</Nav.Link>
            <div className="icontop">
            <li><a href="#" class="fa fa-facebook-square icon" style={{color:"grey"}}></a></li>
                        <li><a href="#" class="fa fa-google-plus-square  icon" style={{color:"grey"}}></a></li>

                        <li><a href="#" class="fa fa-twitter-square icon"style={{color:"grey"}} ></a></li>
                        <li><a href="#" class="fa fa-youtube icon" style={{color:"grey"}}></a></li>
                        <li><a href="#" class="fa fa-pinterest icon" style={{color:"grey"}}></a></li>
                        <li><a href="#" class="fa fa-linkedin icon" style={{color:"grey"}}></a></li>
                        </div>

           
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
);
    
}