import React from "react";

const InfoData2=()=>{
    return (
        <>
        <div style={{margin:"100px"}} >
                    <h1 class="font-weight-bold grey-text text-uppercase">Explore our EV charging network</h1>
                    <hr />
                    <p style={{ fontSize:"20px"}}>A dense charging network is key for a successful transformation to e-mobility. Green Spots focuses on public on-street charging and is constantly expanding its network.
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
        </> 
    )
}


export default InfoData2;