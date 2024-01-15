// import LoginForm from '@/components/loginForm/loginForm';
import { handleGithubLogin } from '@/lib/action';
import Link from 'next/link';
import { login } from '@/lib/action';

export default async function Login() {
    return (
        <div>
            <div>
                <form action={handleGithubLogin}>
                    <button>Login with Github</button>
                </form>
                <form action={login}>
                    <input type="text" placeholder="username" name="username" />
                    <input type="password" placeholder="password" name="password" />
                    <button>Login</button>
                    {/* {state?.error} */}
                    {/* <Link href="/register">
                        {"Don't have an account?"} <b>Register</b>
                    </Link> */}
                </form>
            </div>
        </div>
    );
}
