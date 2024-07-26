import React, { Component } from "react";

class ServiceCampaign extends Component{

    constructor(){
        super()

        this.state ={
            vin : ''
        }
    }

    handlevin=event=>{
        this.setState({
            vin:event.target.value
        })
    }

    handleSubmit=event=>{
        alert(`${this.state.vin}`)
    }


    render(){
        return(
            <div>
                <p style={{margin:'2%'}}>Dear Customer, Please enter your vehicle “VIN” number ( Vehicle Identification Number or Frame Number) below to<br></br>
check if your vehicle requires any inspections as part of ongoing service campaigns other than routine services.</p>

                <form onSubmit={this.handleSubmit} style={{display:'inline-flex',width:'100%',height:'100%'}}>
                    <input type="text" id="vin" name="vin" placeholder="VIN NUMBER" className="form-control" value={this.state.vin} onChange={this.handlevin} style={{width:'50%',margin:"2%"}}></input>

                    <button className="btn btn-primary" onSubmit={this.handleSubmit} style={{width : "20%"}} >SUBMIT</button>

                </form>

                <div className="footer" style={{display:'inline-flex',backgroundColor:'rgb(71, 60, 60)',width:'100%',marginTop:'23%'}}>
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

export default ServiceCampaign