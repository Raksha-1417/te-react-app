import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/Logo.png';
import '../Styles/Home.css';
//class -> className
export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-sm bg-warning navbar-light">
            

            <ul className="navbar-nav">
                <li className="nav-item">

                <img src={logo} style={{height:50,width:50,padding:10}}></img>
                <a className="navbar-brand" href="#">Home Interiors</a>
           
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="funcom">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="classcom">About Us</Link>
                </li>

            </ul>
        </nav>
    )
}