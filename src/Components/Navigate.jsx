import React from"react";
import{ Outlet, Link }from"react-router-dom";

function Navigate(){
return(
    <div>
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="container-fluid">
                            <Link class="navbar-brand" to="#"><img src="./suzukilogo.jpg" alt=""></img></Link>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav" style={{marginLeft:'30%'}}>
                                <li class="nav-item">
                                <Link class="nav-link  navig"style={{fontSize:'larger',fontWeight:'bold'}} aria-current="page" to="/">Home</Link>
                                </li>
                                <li class="nav-item">
                                <Link class="nav-link navig" style={{fontSize:'larger',fontWeight:'bold'}}  to="/servicecampaign">SERVICE CAMPAIGN</Link>
                                </li>
                                <li class="nav-item">
                                <Link class="nav-link navig" style={{fontSize:'larger',fontWeight:'bold'}}  to="community">COMMUNITY</Link>
                                </li>
                                <li class="nav-item">
                                <Link class="nav-link navig" style={{fontSize:'larger',fontWeight:'bold'}}  to="contactus">CONTACT US</Link>
                                </li>
                                <li class="nav-item">
                                <Link class="nav-link navig" style={{fontSize:'larger',fontWeight:'bold'}}  to="#">BOOK ONLINE</Link>
                                </li>
                                <li class="nav-item">
                                <Link class="nav-link navig" style={{fontSize:'larger',fontWeight:'bold'}}  to="">PRODUCTS</Link>
                                </li>
                                
                            </ul>
                            </div>
                            </div>
                        </nav>

        <Outlet />
    </div>
);
}
export default Navigate;
