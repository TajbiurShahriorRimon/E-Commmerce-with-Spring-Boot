import React, {Component} from "react";
import {CgProfile, CgNotes} from "react-icons/cg";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";

class SiteCustomerProfile extends Component<any, any>{
    render() {
        return(
            <div className="container">
                <div className="form-control">
                    <div className="row">
                        <div className="col-md-3" style={{backgroundColor:"mistyrose"}}>
                            <div className="form-group">
                                {/*<label htmlFor="">Name</label>*/}
                                <h3><u>My Account <CgProfile style={{color:"blue"}}/></u></h3>
                                <div><Link to=""><strong style={{color: "red"}}>My Profile</strong></Link></div>
                                <div><Link to=""><strong style={{color: "black"}}>Edit Profile</strong></Link></div>
                                <hr/>
                                <h3><u>My Report <CgNotes style={{color:"blue"}}/></u></h3>
                                <div><Link to=""><strong style={{color: "black"}}>Order Report</strong></Link></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-control">
                                <label htmlFor="">Name</label>
                                <div><strong>Asif Ahmed</strong></div>
                            </div> <br/>
                            <div className="form-control">
                                <label htmlFor="">Email</label>
                                <div><strong>asif@gmail.com</strong></div>
                            </div> <br/>
                            <div className="form-control">
                                <label htmlFor="">Address</label>
                                <div><strong>Dhaka Bangladesh</strong></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-control">
                                <label htmlFor="">Phone</label>
                                <div><strong>0121212</strong></div>
                            </div> <br/>
                            <div className="form-control">
                                <label htmlFor="">Gender</label>
                                <div><strong>Male</strong></div>
                            </div> <br/>
                            <Button style={{width: 200, height: 60}} className="btn-info rounded-3">Change Password</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SiteCustomerProfile;