import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import './styles/Navbar.css';
import Sports from './Sports';
import Technology from './Technology';
import Politics from './Politics';
import Entertainment from './Entertainment';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='nav-links'>
                <div className='nav-links-head'>
                    <Link to='/'><h3>News Aggregator</h3></Link>
                </div>
                <div className='nav-links-mid'>
                    <Link to='/'>Home</Link>
                    <Link to='technology'>Technology</Link>
                    <Link to='politics'>Politics</Link>
                    <Link to='sports'>Sports</Link>
                    <Link to='entertainment'>Entertainment</Link>
                </div>
            </div>

            <div className='nav-routes'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/technology' element={<Technology/>} />
                    <Route path='/politics' element={<Politics/>} />
                    <Route path='/sports' element={<Sports/>} />
                    <Route path='/entertainment' element={<Entertainment/>} />
                </Routes>
            </div>
        </div>
    );
};

export default Navbar;
