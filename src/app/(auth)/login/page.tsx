// import LoginForm from '@/components/loginForm/loginForm';
import { handleGithubLogin } from '@/lib/action';

export default async function Login() {
    return (
        <div>
            <div>
                <form action={handleGithubLogin}>
                    <button>Login with Github</button>
                </form>
            </div>
        </div>
    );
}
