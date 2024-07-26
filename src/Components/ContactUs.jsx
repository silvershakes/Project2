import React, { Component } from "react";
import axios from "axios";


class ContactUs extends Component{

    constructor(){
        super()

        this.state = {
            type: '',
            state: '',
            district: '',
            dealer: '',
            city: '',
            number: '',
            name: '',
            product: '',
            email: '',
            dname:'',
            demail:'',
            dstate:'',
            ddistrict:'',
            dnumber:'',
            dcomment:''
        }
    }

    ChangeHandler = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    ChangeHandler1 = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    SubmitHandler = e =>{
        e.preventDefault()
        console.log(this.state)

        axios.post("https://jsonplaceholder.typicode.com/posts")

        .then(Response =>{
            console.log(Response)
        })

        .catch(error =>{
            console.log(error)
        })

    }

    SubmitHandler1 = e =>{
        e.preventDefault()
        console.log(this.state)

        axios.post("https://jsonplaceholder.typicode.com/posts")

        .then(Response =>{
            console.log(Response)
        })

        .catch(error =>{
            console.log(error)
        })

    }



    render(){
        const{type,state,district,dealer,city,number,name,product,email,dname,demail,dstate,ddistrict,dnumber,dcomment} =this.state

        return(
            <div>
                    <p style={{marginTop:'4%',marginLeft:'5%',fontSize:'300%',fontWeight:'bold'}}>GET IN TOUCH</p>

                    <div style={{display:'inline-flex',width:'100%'}}>
                        <div style={{marginLeft:'5%'}}>
                            <p style={{color:'gray',fontWeight:'bold',fontSize:'120%'}}>Toll Free Number (Monday to Saturday 9AM - 6:00PM)<br></br><span style={{fontSize:'200%',color:'blue',marginTop:'1%'}}>1800-121-7996</span></p>
                        </div>

                        <div style={{marginLeft:'15%'}}>
                            <p style={{color:'gray',fontWeight:'bold',fontSize:'120%'}}>Mail Us At <br></br><span style={{fontSize:'200%',color:'blue',marginTop:'1%'}}>customer.queries@suzukimotorcycle.in</span></p>
                        </div>
                        
                    </div>

                    <div style={{margin:'5%',display:'inline-flex',width:'80%'}}>

                        <div>
                        <h3>SALES & AFTER SALES</h3>
                        <form onSubmit={this.SubmitHandler}>
                        <select value={type} onChange={this.ChangeHandler} name="type" className="form-control"  >
                            <option value='Select Type*'>Select Type*</option>
                            <option value='Enquiry'>Enquiry</option>
                            <option value='Assistance'>Assistance</option>
                            <option value='Feedback & Suggestion'>Feedback & Suggestion</option>
                        </select>

                            <br></br>
                        <input type="text" placeholder="Enter State*" className="form-control"  value={state} onChange={this.ChangeHandler} name="state"></input>
                        <br></br>
                        <input type="text" placeholder="Enter District*" className="form-control" value={district} onChange={this.ChangeHandler} name="district"></input>
                        <br></br>
                        <input type="text" placeholder="Enter Dealer*" className="form-control"  value={dealer} onChange={this.ChangeHandler} name="dealer"></input>
                        <br></br>
                        <input type="text" placeholder="Enter City*" className="form-control" value={city} onChange={this.ChangeHandler} name="city"></input>
                        <br></br>
                        <input type="tel" placeholder="Mobile No*" className="form-control"  value={number} onChange={this.ChangeHandler} name="number"></input>
                        <br></br>
                        <input type="text" placeholder="Your Name*" className="form-control"  value={name} onChange={this.ChangeHandler} name="name"></input>

                        <br></br>

                        <select /*value={this.state.opt} onChange={this.handleOpt}*/ className="form-control"  value={product} onChange={this.ChangeHandler} name="product">
                            <option value='Select Product*'>Select Product*</option>
                            <option value='Avinis'>Avinis</option>
                            <option value='Hayabusa'>Hayabusa</option>
                            <option value='Access'>Access</option>
                            <option value='Gixxer'>Gixxer</option>
                            <option value='Gixxer sf'>Gixxer sf</option>
                            <option value='Burgman'>Burgman</option>
                        </select>

                        <br></br>
                        <input type="email" placeholder="Email*"  className="form-control"  value={email} onChange={this.ChangeHandler} name="email"></input>
                        <br></br>
                        <button type="submit" className="btn btn-primary btn-lg" >Submit</button>
                        </form>
                        </div>

                        <div style={{marginLeft:'36%'}}>
                        <h3>BECOME A DELAER</h3>
                        <form onSubmit={this.SubmitHandler1}>
                        <input type="text" placeholder="Your Name*" className="form-control" name="dname" style={{width:'130%'}} onChange={this.ChangeHandler1} value={dname} ></input>
                            <br></br>
                            <input type="email" placeholder="Email*"  className="form-control"   name="demail" style={{width:'130%'}} onChange={this.ChangeHandler1} value={demail}></input>
                            <br></br>
                            <input type="text" placeholder="Enter State*" className="form-control" name="dstate" style={{width:'130%'}} onChange={this.ChangeHandler1} value={dstate}></input>
                            <br></br>
                            <input type="text" placeholder="Enter District*" className="form-control" name="ddistrict" style={{width:'130%'}} onChange={this.ChangeHandler1} value={ddistrict}></input>
                            <br></br>
                            <input type="tel" placeholder="Mobile No*" className="form-control"  name="dnumber" style={{width:'130%'}} onChange={this.ChangeHandler1} value={dnumber}></input>
                            <br></br>
                            <input type="text" placeholder="Comment*" className="form-control"  name="dcomment" style={{width:'130%'}} onChange={this.ChangeHandler1} value={dcomment}></input>
                            <br></br>
                            <button type="submit" className="btn btn-primary btn-lg" >Submit</button>


                        </form>

                        </div>
                        
                      
                    </div>
                    <p style={{marginLeft:'5%',marginRight:'5%'}}>*By clicking on the Submit button, I am allowing Suzuki Motorcycle India & its group companies to contact me via call, SMS or E-mail. All information provided will be secured and processed as per our privacy policy.</p>

                    <br></br>
                    <h3 style={{marginLeft:'5%', fontFamily:'monospace'}}>Main Head Office</h3>
                    <h4 style={{marginLeft:'5%', fontFamily:'monospace'}}>Village Kherki Dhaula, Badshahapur, N.H.-8, Link Road, Gurgaon</h4>
                    <iframe style={{marginLeft:'10%'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.891506263303!2d76.99840007421238!3d28.392344694949653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3d371a369cb5%3A0x776e0df2ca23c44b!2sSuzuki%20Motorcycle%20India%20Private%20Limited%20(SMIPL)!5e0!3m2!1sen!2sin!4v1713165690483!5m2!1sen!2sin" title="pravin" width="1000" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    <div className="footer" style={{display:'inline-flex',backgroundColor:'rgb(71, 60, 60)',width:'100%'}}>
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

export default ContactUs
