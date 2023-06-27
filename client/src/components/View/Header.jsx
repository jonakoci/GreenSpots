import React from 'react';
import {Link} from "react-router-dom";
import Ikone from '../logos/logo2.png';
import './aboutUs/AboutUs.css'

function Header () {

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container d-flex justify-content-around" style={{height:"100px", margin:"10px", padding:"10px"}} >
                <div>
                    <a class="navbar-brand" href="#">
                      <Link to="/"><img src={Ikone} alt="logo" width="150" height="150" /></Link>
                    </a>
                </div>
                <div class="collapse navbar-collapse d-flex justify-content-end">
                    <ul class="navbar-nav gap-3">
                        <li class="navbar-brand">
                            <Link to="/" style={{ textDecoration: 'none' }}><p class="nav-link active" aria-current="page" >Map</p></Link>
                        </li>
                        <li class="navbar-brand">
                            <Link to="/how" style={{ textDecoration: 'none' }}><p class="nav-link">How to Charge</p></Link>
                        </li>
                        <li class="navbar-brand">
                            <Link to="/about" style={{ textDecoration: 'none' }}><p class="nav-link" href="#">About</p></Link>
                        </li>
                        <li class="navbar-brand">
                            <Link to="/newpoint" style={{ textDecoration: 'none' }}><p class="nav-link" href="#">Add a charge Point</p></Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Header
