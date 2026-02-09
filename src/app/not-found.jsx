import Link from 'next/link';
import React from 'react';

const notFoundPage = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
            <Link href={'/'}>Go to home</Link>
        </div>
    );
};

export default notFoundPage;