import React from 'react';
import {Routes,Route} from "react-router-dom";
import UserPassword from './components/Forms/UserPassword';
import UserRegistration from './components/Forms/UserRegistration';
import VendorRegistrationShop from './components/Forms/VendorRegistrationShop';
import VendorRegistrationUser from './components/Forms/VendorRegistrationUser';
import AddProducts from './components/Forms/AddProducts';
import AddCategory from './components/Forms/AddCategory';
import Login from './components/Forms/Login';
import Vendor from './components/Pages/Vendor';
import VendorProfile from './components/Body/VendorProfile';
import VendorShopInfo from './components/Body/VendorShopInfo';
import VendorAddProducts from './components/Body/VendorAddProducts';
import VendorAddCategory from './components/Body/VendorAddCategory';
import Customer from "./components/Pages/Customer";
import ProductDetails from "./components/Pages/ProductDetails";
import CustomerProfile from "./components/Pages/CustomerProfile";
import CustomerProductForReview from "./components/Pages/CustomerProductForReview";
import ProductCustomerGiveReview from "./components/Pages/ProductCustomerGiveReview";
import TestMail from './components/Pages/testMail';
import ProductReviews from "./components/Pages/ProductReviews";
import Logout from "./components/Pages/Logout";
import ShoppingCart from "./components/Pages/ShoppingCart";
import OrderPending from "./components/Pages/OrderPending";

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
                    <Route path="/addCategory" element={<AddCategory/>}/>
                    <Route path="/vAddProducts/:mail" element={<VendorAddProducts/>}/>
                    <Route path="/vAddCategory" element={<VendorAddCategory/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/testMail/:mail" element={<TestMail/>}/>

                    {/*Customer*/}
                    <Route path="/customer/index" element={<Customer/>}/>
                    <Route path="/customer/profile" element={<CustomerProfile/>}/>
                    <Route path="/customer/productForReview" element={<CustomerProductForReview/>}/>

                    {/*Product*/}
                    <Route path="/product/customer/giveReview/:productId" element={<ProductCustomerGiveReview/>}/>
                    <Route path="/product/productDetails/:id" element={<ProductDetails/>}/>
                    <Route path="/product/allReviews/:id" element={<ProductReviews/>}/>
                    <Route path="/shoppingCart" element={<ShoppingCart/>}/>

                    {/*Order*/}
                    <Route path="/order/pending" element={<OrderPending/>}/>

                    {/*Logout*/}
                    <Route path="/logout" element={<Logout/>}/>

            </Routes>
        </div>
    )
}

export default MainRoutes;