import React from 'react';
import {AdminNavbar} from '../Navbar/AdminNavbar';
import ViewCategory from '../Body/ViewCategory';
import './home.css'

export default function AdminManageCategory(){
    return (
        
            <div className='home'>
                <AdminNavbar/>
                <ViewCategory/>
                
            </div>
              
    )
}