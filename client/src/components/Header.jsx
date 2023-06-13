import React from 'react'
import Ikone from '../components/logo2.png'

function Header () {

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container d-flex justify-content-around">
                <div>
                    <a class="navbar-brand" href="#">
                      <img src={Ikone} alt="logo" width="150" height="150" />
                    </a>
                </div>
                <div class="collapse navbar-collapse d-flex justify-content-end">
                    <ul class="navbar-nav gap-3">
                        <li class="navbar-brand">
                            <a class="nav-link active" aria-current="page" href="#">Map</a>
                        </li>
                        <li class="navbar-brand">
                            <a class="nav-link" href="#">How to Charge</a>
                        </li>
                        <li class="navbar-brand">
                            <a class="nav-link" href="#">Request a charge Point</a>
                        </li>
                        <li class="navbar-brand">
                            <a class="nav-link" href="#">Add a charge Point</a>
                        </li>
                        <li class="navbar-brand">
                            <a class="nav-link" href="#">Support</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Header
