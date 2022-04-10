import React from 'react';
import {Routes,Route} from "react-router-dom";
import App from './App';
import UserPassword from './components/Forms/UserPassword';
import UserRegistration from './components/Forms/UserRegistration';
import VendorRegistrationShop from './components/Forms/VendorRegistrationShop';
import VendorRegistrationUser from './components/Forms/VendorRegistrationUser';
import Navbar from './components/Navbar/Navbar';
import VendorNavbar from './components/Navbar/VendorNavbar';
import Home from './components/Pages/Home';
import Vendor from './components/Pages/Vendor';
import RegOption from './components/RegOption';
import VendorProfile from './components/Body/VendorProfile';
import VendorShopInfo from './components/Body/VendorShopInfo';
function MainRoutes(){
    return(
        <div>
            <Routes>
                
                    <Route path="/" element={<Vendor/>}/>
                    <Route path="/uReg" element={<UserRegistration/>}/>
                    <Route path="/uVendorReg" element={<VendorRegistrationUser/>}/>
                    <Route path="/sVendorReg" element={<VendorRegistrationShop/>}/>
                    <Route path="/sVendorReg/:mail" element={<VendorRegistrationShop/>}/>
                    <Route path="/sLoginReg/:mail" element={<UserPassword/>}/>
                    <Route path="/vProfile" element={<VendorProfile/>}/>
                    <Route path="/vShopInfo" element={<VendorShopInfo/>}/>
            </Routes>
        </div>
    )
}

export default MainRoutes;