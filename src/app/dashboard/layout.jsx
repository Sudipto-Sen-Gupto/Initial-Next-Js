
import Link from 'next/link';


import React from 'react';

const DashboardLayout = ({children}) => {

   
    return (
        <div className='grid grid-cols-12 mt-10 gap-5 min-h-screen'>

            <div className='col-span-3 border-r-2'>
                <Link className='text-2xl' href='/'>Dashboard layout</Link> 
                  
                 <div className='my-10 flex flex-col flex-1 text-black gap-5 pr-5 '>
                     <Link href={'/dashboard'} className='bg-gray-300 hover:bg-gray-100 px-4 py-2'>Home</Link>
                  <Link href={'/dashboard/my-profile'} className='bg-gray-300 hover:bg-gray-100 px-4 py-2'>My Profile</Link>
                  <Link href={'/dashboard/my-story'} className='bg-gray-300 hover:bg-gray-100 px-4 py-2'>My story</Link>
                  <Link href={'/dashboard/setting'} className='bg-gray-300 hover:bg-gray-100 px-4 py-2'>Setting</Link>
                 </div>
                  </div>

            <div className='col-span-9'> {children}</div>
          
           
        </div>
    );
};

export default DashboardLayout;