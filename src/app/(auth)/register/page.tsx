import Link from 'next/link';
import { register } from '@/lib/action';

const Register = () => {
    return (
        <div>
            <div>
                <form action={register}>
                    <input type="text" placeholder="username" name="username" />
                    <input type="email" placeholder="email" name="email" />
                    <input type="password" placeholder="password" name="password" />
                    <input type="password" placeholder="password again" name="passwordRepeat" />
                    <button>Register</button>
                    {/* <Link href="/login">
                        Have an account? <b>Login</b>
                    </Link> */}
                </form>
            </div>
        </div>
    );
};

export default Register;
