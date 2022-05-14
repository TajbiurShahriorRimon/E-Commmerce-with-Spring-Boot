import React from 'react';
import {Routes,Route} from "react-router-dom";
import UserPassword from './components/Forms/UserPassword';
import UserRegistration from './components/Forms/UserRegistration';
import VendorRegistrationShop from './components/Forms/VendorRegistrationShop';
import VendorRegistrationUser from './components/Forms/VendorRegistrationUser';
import AddProducts from './components/Forms/AddProducts';
import Login from './components/Forms/Login';
import Vendor from './components/Pages/Vendor';
import VendorProfile from './components/Body/VendorProfile';
import VendorShopInfo from './components/Body/VendorShopInfo';
import VendorAddProducts from './components/Body/VendorAddProducts';
import Customer from "./components/Pages/Customer";
import ProductDetails from "./components/Pages/ProductDetails";
import CustomerProfile from "./components/Pages/CustomerProfile";
import CustomerProductForReview from "./components/Pages/CustomerProductForReview";
import ProductCustomerGiveReview from "./components/Pages/ProductCustomerGiveReview";
import TestMail from './components/Pages/testMail';
function MainRoutes(){
    return(
        <div>
            <Routes>
                
                    <Route path="/" element={<Login/>}/>
                    <Route path="/uReg" element={<UserRegistration/>}/>
                    <Route path="/uVendorReg" element={<VendorRegistrationUser/>}/>
                    <Route path="/sVendorReg" element={<VendorRegistrationShop/>}/>
                    <Route path="/sVendorReg/:mail" element={<VendorRegistrationShop/>}/>
                    <Route path="/sLoginReg/:mail" element={<UserPassword/>}/>
                    <Route path="/vProfile" element={<VendorProfile/>}/>
                    <Route path="/vShopInfo" element={<VendorShopInfo/>}/>
                    <Route path="/vHome" element={<Vendor/>}/>
                    <Route path="/addProducts" element={<AddProducts/>}/>
                    <Route path="/product/productDetails/:id" element={<ProductDetails/>}/>
                    <Route path="/vAddProducts" element={<VendorAddProducts/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/testMail/:mail" element={<TestMail/>}/>

                    {/*Customer*/}
                    <Route path="/customer/index/:tk" element={<Customer/>}/>
                    <Route path="/customer/profile/:id" element={<CustomerProfile/>}/>
                    <Route path="/customer/productForReview" element={<CustomerProductForReview/>}/>

                    {/*Product*/}
                    <Route path="/product/customer/giveReview/:productId" element={<ProductCustomerGiveReview/>}/>
            </Routes>
        </div>
    )
}

export default MainRoutes;