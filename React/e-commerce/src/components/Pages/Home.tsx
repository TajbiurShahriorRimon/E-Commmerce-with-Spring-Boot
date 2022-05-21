import React from 'react';
import SiteHome from '../Body/SiteHome';
import HomeNavbar from '../Navbar/HomeNavbar';
import RegOption from '../RegOption';
import './home.css'


export default function Home(){
    return (
        
            <div className='home'>
                <HomeNavbar/>
                <SiteHome/>
                
            </div>
              
    )
}