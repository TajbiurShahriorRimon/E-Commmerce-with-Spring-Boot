import React from 'react';
import {AdminNavbar} from '../Navbar/AdminNavbar';
import ManageUsers from '../Body/ManageUsers';
import './home.css'

export default function AdminManageUsers(){
    return (
        
            <div className='home'>
                <AdminNavbar/>
                <ManageUsers/>
                
            </div>
              
    )
}