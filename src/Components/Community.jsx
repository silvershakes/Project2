import React, { Component } from "react";
import "./Community.css"

class Community extends Component{
    render(){
        return(
            <div>
              <div>
                    <img src="./Community_Page_Banner_1918X653_copy_6606ddc909204.jpg" className="banner" style={{width:'100%'}} alt=""></img>
                </div> 
                
                <div>
                    <br></br>
                    <p style={{textAlign:'center',fontSize:'400%',fontWeight:'bold'}}>Our Community</p>

                    <div>
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" style={{width:'70%',margin:'auto'}}>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src="./Community1.jpg" class="d-block w-100" alt="..."></img>
                            </div>
                            <div class="carousel-item">
                            <img src="./Community2.jpg" class="d-block w-100" alt="..."></img>
                            </div>
                            <div class="carousel-item">
                            <img src="./Community3.jpg" class="d-block w-100" alt="..."></img>
                            </div>
                            <div class="carousel-item">
                            <img src="./Community4.jpg" class="d-block w-100" alt="..."></img>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                        </div>
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

export default Community
