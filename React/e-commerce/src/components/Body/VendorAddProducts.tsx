import React from 'react';
import  "./vendorprofile.css";
import VendorProfileNavbar from '../Navbar/VendorProfileNavbar';
import VendorAddProduct from '../Forms/AddProducts';



function VendorAddProducts(){

return (
        <div className='container'>
            <VendorProfileNavbar/>
            <VendorAddProduct/>
            
        </div>    
    )
}
export default VendorAddProducts;