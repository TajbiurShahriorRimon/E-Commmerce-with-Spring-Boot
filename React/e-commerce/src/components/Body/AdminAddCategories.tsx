import React from 'react';
import  "./vendorprofile.css";
import {AdminNavbar} from '../Navbar/AdminNavbar';
import AddCategory from '../Forms/AddCategory';



function AdminAddCategories(){

return (
        <div className='container'>
            <AdminNavbar/>
            <AddCategory/>
            
        </div>    
    )
}

export default AdminAddCategories;
