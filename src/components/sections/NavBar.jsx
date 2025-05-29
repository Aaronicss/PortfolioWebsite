import React from 'react';
import logo from '../../assets/logo.svg';

const Navbar = () => {
    return (
        <div className="flex items-center justify-between px-20 py-4 bg-black sticky top-0 z-50">
            <div className="flex items-center space-x-6"> 
                <img src={logo} alt='logo' className='w-16 h-16' />
                <h1 className="text-white font-bold text-2xl">Aaron Lazaro</h1></div>
            <ul className="flex items-center space-x-20">
                <li>Home</li>
                <li>About</li>
                <li>Gallery</li>
                <li>Demo</li>
                <li>Testimonies</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}
export default Navbar;
