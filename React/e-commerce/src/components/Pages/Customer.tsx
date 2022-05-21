import React, {Component} from "react";
import {CustomerNavbar} from "../Navbar/CustomerNavbar";
import CustomerHome from "../Body/CustomerHome";
import axios from "axios";
import base_url from "../../api/bootapi";
import {useNavigate} from "react-router-dom";

/*class Customer extends Component<any, any>{
    render() {
        return (
            <div>
                <CustomerNavbar/>
                <CustomerHome/>
            </div>
        )
    }
}*/

const Customer = () => {
    const navigate = useNavigate();

    const verifyToken1 = ()=>{

        let token= "Bearer "+localStorage.getItem("token");
        console.log(token);
        axios.post(`${base_url}tokenValidation`,"data",{
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }}).then(
            (response)=>{ //user is authorized
                alert("Authorized");
                if(localStorage.getItem("userType_session") != "customer"){ //only authorized customer can get access
                    alert("not customer");
                }
                //navigate("/customer/index");
                return
            },(error)=>{
                alert("UnAuth")
                let res:string[]=Object.values(error.response.data);
                let errorMsg:string="";

                /*for(let i=0;i<res.length;i++){
                    errorMsg+=res[i];
                    errorMsg+="\n"
                }*/

                alert(errorMsg);
            }
        );
    };

    return(
        <div onLoad={verifyToken1}>
            <CustomerNavbar/>
            <CustomerHome/>
        </div>
    )
}

export default Customer;