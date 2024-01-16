import Link from 'next/link';
import Links from './links/Links';
import { auth } from '@/lib/auth';

const Navbar = async () => {
    const session = await auth();
    // console.log(session);
    return (
        <div className=" bg-black text-white py-3">
            <div className="container flex justify-between">
                <Link href="/">Logo</Link>
                <div>
                    <Links session={session} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
