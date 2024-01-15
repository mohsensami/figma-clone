'use client';

import { useState } from 'react';

import NavLink from './navLink/navLink';
import Image from 'next/image';
import { handleLogout } from '@/lib/action';
import { auth } from '@/lib/auth';

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

const Links = ({ session }) => {
    // TEMPORARY

    // const isAdmin = true;

    return (
        <div>
            <div className="flex gap-3">
                {links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))}
                {session?.user ? (
                    <>
                        {session.user?.isAdmin && <NavLink item={{ title: 'Admin', path: '/admin' }} />}
                        <form action={handleLogout}>
                            <button>Logout</button>
                        </form>
                    </>
                ) : (
                    <NavLink item={{ title: 'Login', path: '/login' }} />
                )}
            </div>
        </div>
    );
};

export default Links;
