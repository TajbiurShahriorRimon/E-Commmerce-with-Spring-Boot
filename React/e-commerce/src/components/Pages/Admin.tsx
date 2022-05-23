import React from 'react';
import {AdminNavbar} from '../Navbar/AdminNavbar';
import AdminHome from '../Body/AdminHome';
import './home.css'

export default function Admin(){
    return (
        
            <div className='home'>
                <AdminNavbar/>
                <AdminHome/>
                
            </div>
              
    )
}