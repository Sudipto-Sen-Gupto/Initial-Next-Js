
"use client";

import { useRouter } from 'next/navigation';
import React from 'react';

//next js does not allow event handlers in server components


const Banner = () => {
       
   const router=useRouter();
    const handleButtonClick=()=>{
       const pass=prompt("Give your password");
      if(pass=="1234"){
           router.push('/dashboard')
      }
    }
    return (
        <div>
            <div className='bg-gradient-to-r from-sky-300 via-sky-500 to-sky-700 mt-20 p-10 text-center space-y-5'>
      
           <h1 className='text-4xl'>
              Welcome to home page. Share your story.
           </h1>
           <button onClick={handleButtonClick} className='bg-blue-500 text-white px-4 py-2   cursor-pointer hover:bg-blue-950'>Click to share</button>
    </div>
        </div>
    );
};

export default Banner;