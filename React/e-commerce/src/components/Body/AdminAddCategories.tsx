import React from 'react';
import  "./vendorprofile.css";
import {AdminNavbar} from '../Navbar/AdminNavbar';
import VendorAddCategory from '../Forms/AddCategory';



function AdminAddCategories(){

return (
        <div className='container'>
            <AdminNavbar/>
            <VendorAddCategory/>
            
        </div>    
    )
}

export default AdminAddCategories;
