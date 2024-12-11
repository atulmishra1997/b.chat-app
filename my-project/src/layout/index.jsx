import React from 'react';
import logo from '../assets/logo.png';

const AuthLayouts = ({ children }) => {
    return (
        <>
            <header className='py-5 px-10 bg-[#323250] fixed top-0 left-0 right-0 z-10 shadow-md'>
                <img src={logo} alt="logo" width={50} height={40}/>
            </header>

            { children }
        </>
    )
}

export default AuthLayouts
