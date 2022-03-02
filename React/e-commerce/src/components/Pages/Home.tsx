import React from 'react';
import SiteHome from '../Body/SiteHome';
import Navbar from '../Navbar/Navbar';
import RegOption from '../RegOption';
import './home.css'


export default function Home(){
    return (
        
            <div className='home'>
                <Navbar/>
                <SiteHome/>
                
            </div>
              
    )
}