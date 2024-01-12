import Link from 'next/link';
import Links from './links/Links';

const Navbar = async () => {
    return (
        <div className=" bg-black text-white py-3">
            <div className="container flex justify-between">
                <Link href="/">Logo</Link>
                <div>
                    <Links />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
