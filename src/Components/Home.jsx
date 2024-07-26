import React, { Component } from "react";
import "./Home.css"

class Home extends Component{
    render(){
        return(
            <div>

                <div>
                    <video src="./Suzuki-Website-Video-Loop.mp4" autoPlay loop muted style={{width:'100%',height:'80%'}}></video>
                </div>

                <div style={{display:'inline-flex',width:'100%'}}>
                    <div style={{width:'50%',marginLeft:'7%'}}>
                        <br></br>
                    <h2 className="motor">MOTORCYCLES</h2>

                    <div id="carouselExampleDark1" class="carousel carousel-dark slide" data-bs-ride="carousel" style={{width:'90%',height:'90%'}}>
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="10000">
                            <img src="./VStrom_2547x1420px-01-min_620f9c8816fac.jpg" class="d-block w-100" alt="..."></img>
                            <div class="carousel-caption d-none d-md-block" style={{color:'white',fontSize:'large'}}>
                                <h5>V-STROM SX</h5>
                                <p>Exploring isn’t bound by the calendar. Because every time the clock ticks, it’s an opportunity to explore. And the V-STROM SX is designed for every such journey.</p>
                            </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000" >
                            <img src="./Gixxer_150_Website_Images_2547x1420px-01_63cf7fd2af485.jpg" class="d-block w-100" alt="..."></img>
                            <div class="carousel-caption d-none d-md-block" style={{color:'white',fontSize:'large'}}>
                                <h5>GIXXER SF/ GIXXER</h5>
                                <p>The next generation GIXXER / GIXXER SF retains its highly applauded sportiness and now comes equipped with Suzuki Ride Connect Technology.</p>
                            </div>
                            </div>
                            
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark1" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark1" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                        </div>
                    </div>

                    <div style={{width:'50%'}}>
                    <br></br>

                        <h2 className="motor">BIG BIKES</h2>
                        <div id="carouselExampleDark2" class="carousel carousel-dark slide" data-bs-ride="carousel" style={{width:'90%',height:'90%',borderRadius:'2%'}}>
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="10000">
                            <img src="./Hayabusa_Banner_2547x1420px_642be320dc866.jpg" class="d-block w-100" alt="..."></img>
                            <div class="carousel-caption d-none d-md-block" style={{color:'white',fontSize:'large'}}>
                                <h5>HAYABUSA</h5>
                                <p>Famed for its abundant power, agility and majestic presence. Legendary for establishing new levels of ultimate sport performance.</p>
                            </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000" >
                            <img src="./VStrom_2547x1420px-01-min_620f9c8816fac.jpg" class="d-block w-100" alt="..."></img>
                            <div class="carousel-caption d-none d-md-block" style={{color:'white',fontSize:'large'}}>
                                <h5>GIXXER SF/ GIXXER</h5>
                                <p>The next generation GIXXER / GIXXER SF retains its highly applauded sportiness and now comes equipped with Suzuki Ride Connect Technology.</p>
                            </div>
                            </div>
              
                            
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark2" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark2" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                        </div>
                    </div>

                 
                </div>

                <div>
                    <br></br>
                <h2 className="motor" style={{marginLeft:'45%'}}>SCOOTERS</h2>
                <div id="carouselExampleDark3" class="carousel carousel-dark slide" data-bs-ride="carousel" style={{width:'40%',height:'40%',borderRadius:'2%',margin:'auto'}}>
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="10000">
                            <img src="./Burgman_Digital_2547x1420px_27_02_23.jpg" class="d-block w-100" alt="..."></img>
                            <div class="carousel-caption d-none d-md-block" style={{color:'white',fontSize:'large'}}>
                                <h5>BURGMAN STREET EX</h5>
                                <p>New Burgman Street EX. The Special One. Now More Special Than Ever.</p>
                            </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000" >
                            <img src="./Avenis_Digital_2_2547x1420px_27_02_23.jpg" class="d-block w-100" alt="..."></img>
                            <div class="carousel-caption d-none d-md-block" style={{color:'white',fontSize:'large'}}>
                                <h5>AVENIS</h5>
                                <p>The Suzuki Avenis is a performance-driven Sporty scooter that has enough power to make any journey zippy.</p>
                            </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000" >
                            <img src="./Access_125_Homepage_Slider_Banner_2547x1420px-min_64c7593e337eb.png" class="d-block w-100" alt="..."></img>
                            <div class="carousel-caption d-none d-md-block" style={{color:'white',fontSize:'large'}}>
                                <h5>aCCESS 125</h5>
                                <p>Presenting the upgraded Version of Access 125 with more appeal and features.</p>
                            </div>
                            </div>
              
                            
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark3" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark3" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                        </div>
                </div>

                <div className="footer" style={{display:'inline-flex',backgroundColor:'rgb(71, 60, 60)',width:'100%',marginTop:'2%'}}>
                    <div style={{width:'50%'}}>
                        <img src="./suzukilogo.jpg" style={{margin:'3%'}} alt=""></img>
                    </div>

                    <div>
                        <h1 style={{color:'white',marginTop:'7%'}}>Suzuki Motorcycle India Limited</h1>
                    </div>
                </div>

            </div>
        )
    }
}

export default Home