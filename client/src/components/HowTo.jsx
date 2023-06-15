import React from 'react'
import './styling.css'
import { useNavigate } from 'react-router-dom'


function HowTo() {
    const navigate = useNavigate()


    return (
        <div style={{backgroundImage:'url("https://i0.wp.com/myfreeslides.com/wp-content/uploads/2020/02/green-yellow-Presentation-Gradient-Background.jpg?ssl=1")', backgroundSize: "cover"}}>
            <div class="container z-depth-1 py-5 px-4 px-lg-0" >
                <section>
                    <h3 class="font-weight-bold text-center dark-grey-text pb-2">How it works</h3>
                    <hr class="w-header my-4"/>
                        <p class="lead text-center text-muted pt-2 mb-5">Follow these simple steps once you reach your charging point.</p>
                        <div class="row">
                            <div class="col-lg-8 mx-auto">
                                <ol class="timeline">
                                    <li class="timeline-element">
                                        <h5 class="font-weight-bold dark-grey-text mb-3"> 1. Scan the QR code present in the charging spot</h5>
                                        <p> <img class="img-fluid z-depth-1-half rounded" src="https://cdn.create.vista.com/api/media/small/424003216/stock-video-scan-code-smartphone-computer-monitor?videoStaticPreview=true&token=" alt="..." /></p>

                                        <p class="text-muted">Let the app scan the QR code: Once the QR code is in the viewfinder, 
                                        the scanner app will automatically recognize and scan it. You don't need to press any buttons or take a photo manually. <br />The app will analyze the code and extract the information embedded within it.</p>
                                    </li>

                                    <li class="timeline-element">
                                        <h5 class="font-weight-bold dark-grey-text mb-3">2. Fill information form</h5>
                                        <p class="text-muted"> If you are not registered you may be required to fill in certain information. Here are the common details you might need to provide:</p>
                                        <ul>
                                            <li>Email Address</li>
                                            <li>Name</li>
                                            <li>Car Information: the make, model, and license plate number</li>
                                            <li>Name</li>
                                            <li>Estimated duration of your charging session</li>
                                            <li>Payment Method</li>
                                        </ul>
                                    </li>

                                    <li class="timeline-element">
                                        <h5 class="font-weight-bold dark-grey-text mb-3">Power ON</h5>
                                        <p> <img class="img-fluid z-depth-1-half rounded" src="https://media.istockphoto.com/id/1292252309/photo/electric-cars-are-charging-in-station.jpg?s=612x612&w=0&k=20&c=i2hMAmP83hPn-NKTm7iIE6JVh3mFvIpChHxPD3dtg4M=" alt="..." /></p>
                                        <p class="text-muted">Enjoy a coffee as your car is charging and follow in real time the remaining time of charging</p>
                                    </li>

                                    <li class="timeline-element">
                                        <h5 class="font-weight-bold dark-grey-text mb-3">Billing through email </h5>
                                        <p class="text-muted">An email will we sent to you will the billing information and your credit bonus score. Reminder: for every charge you gain extra credit to use on your next charging.</p>
                                    </li>
                                </ol>

                                <p class="lead text-center text-muted pt-2 mb-5">We wanted to take a moment to extend our heartfelt gratitude and say a big "Thank You" to each and every one of you who have chosen to drive electric cars. Your conscious decision to embrace electric vehicles is making a significant positive impact on our environment and shaping a greener future for all.By opting for electric cars, you are actively contributing to reducing carbon emissions and combating climate change</p>

                                <button class="btn btn-success" onClick={()=> navigate('/')}> Back to Map </button>


                            </div>
                        </div>

                </section>

            </div>
        </div>
    )
}

export default HowTo
