import React from 'react'

function Footer() {
    return (
        <>

            
            <footer
                class="text-center text-lg-start text-dark"
                style={{ backgroundColor: "white", padding: "20px" }}
            >
                <section
                    class="d-flex justify-content-between p-4 text-white"
                    style={{ backgroundColor: "#82cc28" }}
                >
                    <div class="me-5 fs-4">
                        <span>Get connected with us:</span>
                    </div>
                    <div>
                        <a href="" class="text-white me-4">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="" class="text-white me-4">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="" class="text-white me-4">
                            <i class="fab fa-google"></i>
                        </a>
                        <a href="" class="text-white me-4">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="" class="text-white me-4">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="" class="text-white me-4">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </section>
                <section class="">
                    <div class="container text-center text-md-start mt-5">
                        <div class="row mt-3">
                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold">Green Spots</h6>
                                <hr
                                    class="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: " #7c4dff", height: "2px" }}
                                />
                                <p>
                                    We are user-friendly and comprehensive online platform that empowers electric vehicle (EV) owners
                                    to effortlessly locate electrical charging points based on their current location.
                                </p>
                            </div>
                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold">Contact</h6>
                                <hr
                                    class="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                />
                                <p>
                                    <a href="#!" class="text-dark">Charging Solutions</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-dark">For Local Authorities</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-dark">Contact Us</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-dark">For EV Drivers</a>
                                </p>
                            </div>
                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold">Company</h6>
                                <hr
                                    class="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                                <p>
                                    <a href="#!" class="text-dark">About Us</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-dark">Management</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-dark">Help</a>
                                </p>
                            </div>
                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 class="text-uppercase fw-bold">Legal</h6>
                                <hr
                                    class="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                                <p><i class="fas fa-home mr-3"></i> Cookie Policy</p>
                                <p><i class="fas fa-envelope mr-3"></i> Cookie Preferences</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div
                    class="text-center p-3"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                >
                    © 2023 Copyright:
                    <a class="text-dark" href="https://greenspots.com/"
                    >GreenSpots.com</a>
                </div>
            </footer>
        </>

    )
}

export default Footer
