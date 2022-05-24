import React, {Component} from "react";
import {Button, Col, Container, Form, Input, Label, Row} from "reactstrap";
import axios from "axios";
import base_url from "../../api/bootapi";

class UserUpdateForm extends Component<any, any>{
    state = {
        name: "",
        address: "",
        gender: "",
        mail: "",
        phone: "",
        status: "",
        type: "",

        nameErr: "",
        mailErr: "",
        addressErr: "",
        phoneErr: ""
    }

    handleFormSubmit = async (e: any) => {
        var resp = await axios.post(`${base_url}user/update/`+localStorage.getItem("email"));
        if(resp.status == 200){
            alert("Success");
            /*if(localStorage.getItem("userType_session") == "customer"){
                await this.customerEdit();
            }
            else if(localStorage.getItem("userType_session") == "customer"){
                await this.customerEdit();
            }*/
        }
        else if(resp.status == 404){
            alert("error");
        }
    }

    /*customerEdit = async () => {
        var customerUpdate = axios.post()
    }

    vendorEdit = async () => {
        var vendorUpdate = axios.post()
    }*/

    async componentDidMount() {
        var resp = await axios.get(`${base_url}user/`+localStorage.getItem("email"));
        console.log(resp);
        if(resp.status == 200){
            this.setState({
                name: resp.data.name,
                address: resp.data.address,
                gender: resp.data.gender,
                mail: resp.data.mail,
                phone: resp.data.phone,
            })
        }
    }
    render() {
        return(
            <div >
                <Container >
                    <Row className='justify-content-center my-5'>
                        <Col md={4}>
                            <form onSubmit={this.handleFormSubmit}>
                                <Label className="form-label my-2" for="mail">
                                    Email
                                </Label>
                                <Input
                                    id="mail"
                                    name="mail"
                                    placeholder="Enter Your Mail Id"
                                    type="text"
                                    value={this.state.mail}
                                    className='form-control'
                                    onChange={(e)=>{
                                        this.setState({
                                            mail: e.target.value
                                        })
                                    }}
                                />

                                <Label className='form-label my-2' for="Name">
                                    Name
                                </Label>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={this.state.name}
                                    className='form-control'
                                    onChange={(e)=>{
                                        this.setState({
                                            name: e.target.value
                                        })
                                    }}
                                />

                                <Label className='form-label my-2' for="userPhone">
                                    Phone
                                </Label>
                                <Input
                                    id="userPhone"
                                    name="userPhone"
                                    placeholder="Phone Number"
                                    type="text"
                                    value={this.state.phone}
                                    className='form-control'
                                    onChange={(e)=>{
                                        this.setState({
                                            phone: e.target.value
                                        })
                                    }}
                                />

                                <Label className='form-label my-2' for="userPhone">
                                    Address
                                </Label>
                                <textarea className="form-control styleTextarea"  id="userAddress"
                                      value={this.state.address}
                                      onChange={(e)=>{
                                          this.setState({
                                              address: e.target.value
                                          })
                                      }}
                                >

                                </textarea>

                                <Label className='form-label my-2'>
                                    Gender
                                </Label>
                                <select value={this.state.gender}
                                    className="form-select" aria-label="Default select example"
                                    id="gender" onChange={(e)=>{
                                    this.setState({
                                        gender: e.target.value
                                    })
                                }}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                {/*<div className="text-danger">
                                    {errorUser.mail == "" ? "" : errorUser.mail}
                                </div>
                                <Label className='form-label my-2' for="Name">
                                    Name
                                </Label>
                                <Input
                                    id="userName"
                                    name="Name"
                                    type="text"
                                    className='form-control'
                                    onChange={(e)=>{
                                        setUser({...user,name:e.target.value})
                                    }}
                                />
                                <div className="text-danger">
                                    {errorUser.name == "" ? "" : errorUser.name}
                                </div>
                                <Label className='form-label my-2' for="userPhone">
                                    Phone
                                </Label>
                                <Input
                                    id="userPhone"
                                    name="userPhone"
                                    placeholder="Phone Number"
                                    type="text"
                                    className='form-control'
                                    onChange={(e)=>{
                                        setUser({...user,phone:e.target.value})
                                    }}
                                />
                                <div className="text-danger">
                                    {errorUser.phone == "" ? "" : errorUser.phone}
                                </div>

                                <Label className='form-label my-2' for="userPhone">
                                    Address
                                </Label>
                                <textarea className="form-control styleTextarea"  id="userAddress"
                                          onChange={(e)=>{
                                              setUser({...user,address:e.target.value})
                                          }}
                                ></textarea>
                                <div className="text-danger">
                                    {errorUser.address == "" ? "" : errorUser.address}
                                </div>
                                <Label className='form-label my-2' for="userPhone">
                                    Gender
                                </Label>
                                <select className="form-select" aria-label="Default select example" id="userGender" onChange={(e)=>{
                                    this.setState({

                                    })
                                }}>
                                    <option selected value="male">Male</option>
                                    <option value="femal">Female</option>
                                </select>*/}
                                <Button className='my-2 w-100' type='submit' color='primary'>Submit</Button>
                            </form>
                            <button onClick={this.handleFormSubmit}>click</button>
                        </Col>
                    </Row>

                </Container>

            </div>
        )
    }
}

export default UserUpdateForm;