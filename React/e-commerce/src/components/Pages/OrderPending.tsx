import React, {useEffect} from "react";
import {AdminNavbar} from "../Navbar/AdminNavbar";
import SiteOrderPending from "../Body/siteOrderPending";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import base_url from "../../api/bootapi";

const OrderPending = () => {

    var navigate = useNavigate();

    useEffect(() => {
        /*let token= "Bearer "+localStorage.getItem("token");
        console.log(token);
        axios.post(`${base_url}tokenValidation`,"data",{
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }}).then(
            (response)=>{
                navigate("/customer/index");
            },(error)=>{

                let res:string[]=Object.values(error.response.data);
                let errorMsg:string="";

                /!*for(let i=0;i<res.length;i++){
                    errorMsg+=res[i];
                    errorMsg+="\n"
                }

                navigate("/");
                alert(errorMsg);*!/
            }
        );*/
        if(localStorage.getItem("userType_session") != "admin"){
            navigate("/");
        }
    }, [])

    return(
        <div>
            <AdminNavbar/>
            <SiteOrderPending/>
        </div>
    )
}

export default OrderPending;