'use client';

import { useState } from 'react';

import NavLink from './navLink/NavLink';
import Image from 'next/image';

const links = [
    {
        title: 'Homepage',
        path: '/',
    },
    {
        title: 'About',
        path: '/about',
    },
    {
        title: 'Contact',
        path: '/contact',
    },
    {
        title: 'Blog',
        path: '/blog',
    },
];

const Links = () => {
    const [open, setOpen] = useState(false);

    // TEMPORARY
    // const session = true;
    // const isAdmin = true;

    return (
        <div>
            <div>
                {links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))}
            </div>
            <Image src="/menu.png" alt="" width={30} height={30} onClick={() => setOpen((prev) => !prev)} />
            {open && (
                <div>
                    {links.map((link) => (
                        <NavLink item={link} key={link.title} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Links;
