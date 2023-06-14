import React from 'react'

function Footer() {
    return (
        <>

            <div style={{margin:"100px"}} >
                <h1 class="font-weight-bold grey-text text-uppercase">Explore our EV charging network</h1>
                <hr />
                <p style={{ width:"85%", fontSize:"20px"}}>A dense charging network is key for a successful transformation to e-mobility. Green Spots focuses on public on-street charging and is constantly expanding its network.
                    To find your nearest Green Spot charge point now, you can also user our interactive map.</p>
            </div>
            <div class="container">
                <section>
                    <h3 class="font-weight-bold text-center dark-grey-text pb-2">Statistic Data</h3>
                    <hr class="w-header my-4" />
                    <p class="lead text-center text-muted pt-2 mb-5">Growing everyday.</p>
                    <div class="row white-text">
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card classic-admin-card primary-color p-4">
                                <div class="card-body py-3">
                                    <i class="far fa-money-bill-alt"></i>
                                    <p class="small">Public charge points installed</p>
                                    <h4>12</h4>
                                </div>
                                <div class="progress md-progress">
                                    <div class="progress-bar grey darken-3" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card classic-admin-card warning-color p-4">
                                <div class="card-body py-3">
                                    <i class="fas fa-chart-line"></i>
                                    <p class="small">SUBSCRIPTIONS</p>
                                    <h4>200</h4>
                                </div>
                                <div class="progress md-progress">
                                    <div class="progress-bar bg grey darken-3" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="card-body pt-2 pb-3">
                                    <p class="small mb-0">Worse than last week (25%)</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card classic-admin-card light-blue lighten-1 p-4">
                                <div class="card-body py-3">
                                    <i class="fas fa-chart-pie"></i>
                                    <p class="small"> WEB TRAFFIC</p>
                                    <h4>20000</h4>
                                </div>
                                <div class="progress md-progress">
                                    <div class="progress-bar grey darken-3" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="card-body pt-2 pb-3">
                                    <p class="small mb-0">Better than last week (75%)</p>
                                </div>
                            </div>

                        </div>

                        <div class="col-xl-3 col-md-6 mb-4">

                            <div class="card classic-admin-card red accent-2 p-4">
                                <div class="card-body py-3">
                                    <i class="fas fa-chart-bar"></i>
                                    <p class="small">Carbon Emission</p>
                                    <h4>2000</h4>
                                </div>
                                <div class="progress md-progress">
                                    <div class="progress-bar grey darken-3" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="card-body pt-2 pb-3">
                                    <p class="small mb-0">Better than last week (25%)</p>
                                </div>
                            </div>


                        </div>


                    </div>

                </section>
            </div>
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
