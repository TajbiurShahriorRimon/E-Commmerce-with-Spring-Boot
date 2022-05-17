import React from 'react';
import  "./vendorprofile.css";
import VendorProfileNavbar from '../Navbar/VendorProfileNavbar';
import VendorAddCategory from '../Forms/AddCategory';



function VendorAddCategories(){

return (
        <div className='container'>
            <VendorProfileNavbar/>
            <VendorAddCategory/>
            
        </div>    
    )
}

export default VendorAddCategories;
