"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import Navlink from './Navlink';

const Header = () => {

    const pathName=usePathname();
    console.log(pathName);
    if(pathName.startsWith('/dashboard')) return <></>
    return (
        <div>
            <header className="flex justify-between flex-wrap">
                   <h1 className="border-b-2 text-3xl border-gray-400">My next js</h1>

                  
           
           <nav className="flex gap-5">
            <Navlink href={'/'}> Home</Navlink>
            <Navlink href={'/tutorial'}>Tutorial</Navlink>
            <Navlink href={'/story'}>Story</Navlink>
             <Navlink href={'/about'}>About</Navlink>
             <Navlink href={'/register'}>Register</Navlink>
             <Navlink href={'/login'}>Login</Navlink>
             <Navlink href={'/dashboard'}>Dashboard</Navlink>
                       </nav>
       
             </header>
        </div>
    );
};

export default Header;