import React, { useState,Component } from "react";

import { useEffect } from 'react';
import axios from 'axios';
import base_url from '../../api/bootapi';
import { useParams } from 'react-router-dom';


class VerifyMail extends Component<any, any>{
    constructor(props : any) {
        super(props);
    }

    state = {
        mail: {
            mail: "",
            verificationCode: ""
        }
    }
    async componentDidMount() {
        let params:string[] = window.location.pathname.split("/");
        this.state.mail.verificationCode=params.pop()!;
        this.state.mail.mail=params.pop()!;
        alert(this.state.mail.verificationCode);
        alert(this.state.mail.mail);

        axios.post(`${base_url}verifyMail`,this.state.mail).then(
            (response)=>{
                alert("Success");
            },(error)=>{
                
                let res:string[]=Object.values(error.response.data);
                let errorMsg:string="";

                for(let i=0;i<res.length;i++){
                    errorMsg+=res[i];
                    errorMsg+="\n"
                }
                
                  alert(errorMsg);
                
                
                
                
            }
        );
    }

    render(){
        return(
            <div></div>
        );
    }
    

}

export default VerifyMail;
