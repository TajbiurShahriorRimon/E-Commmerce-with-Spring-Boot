import React from 'react';
import {Routes,Route} from "react-router-dom";
import App from './App';
import UserRegistration from './components/Forms/UserRegistration';
import VendorRegistration from './components/Forms/VendorRegistration';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import RegOption from './components/RegOption';
function MainRoutes(){
    return(
        <div>
            <Routes>
                
                    <Route path="/" element={<RegOption/>}/>
                    <Route path="/uReg" element={<UserRegistration/>}/>
                    <Route path="/uVendorReg" element={<VendorRegistration/>}/>
            </Routes>
        </div>
    )
}

export default MainRoutes;