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
    // TEMPORARY
    // const session = true;
    // const isAdmin = true;

    return (
        <div>
            <div className="flex gap-3">
                {links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))}
            </div>
        </div>
    );
};

export default Links;
