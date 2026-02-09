import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({href,children}) => {
    const pathName=usePathname();
    return (
        <div>
            <Link href={href} className={pathName===href ? 'text-blue-500' : ''}>{children}</Link>
        </div>
    );
};

export default Navlink;