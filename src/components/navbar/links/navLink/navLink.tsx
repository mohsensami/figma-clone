'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ item }: any) => {
    const pathName = usePathname();

    return <Link href={item.path}>{item.title}</Link>;
};

export default NavLink;
