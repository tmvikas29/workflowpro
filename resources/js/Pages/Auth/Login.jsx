import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
                <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-700">

                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-white tracking-wide">
                            Workflow<span className="text-blue-500">Pro</span>
                        </h1>
                        <p className="text-gray-400 text-sm mt-1">
                            Sign in to your account
                        </p>
                    </div>

                    {status && (
                        <div className="mb-4 text-sm text-green-500 text-center">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit} className="space-y-5">

                        <div>
                            <InputLabel htmlFor="email" value="Email address" className="text-white"/>
                            <TextInput id="email" type="email" name="email" value={data.email}
                                className="mt-1 block w-full bg-gray-900 border-gray-700 text-white focus:border-blue-500 focus:ring-blue-500"
                                autoComplete="username" isFocused={true} onChange={(e) => setData('email', e.target.value)}
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="password" value="Password" className="text-white" />

                            <TextInput id="password" type="password" name="password" value={data.password}
                                className="mt-1 block w-full bg-gray-900 border-gray-700 text-white focus:border-blue-500 focus:ring-blue-500"
                                autoComplete="current-password"  onChange={(e) => setData('password', e.target.value)}
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center text-gray-400">
                                <Checkbox name="remember" checked={data.remember}  onChange={(e) => setData('remember', e.target.checked) } />
                                <span className="ms-2">Remember me</span>
                            </label>

                            {canResetPassword && (
                                <Link href={route('password.request')} className="text-blue-400 hover:text-blue-300" >Forgot password?</Link>
                            )}
                        </div>

                        <PrimaryButton className="w-full justify-center bg-blue-600 hover:bg-blue-700" disabled={processing} >
                            Log in
                        </PrimaryButton>
                    </form>

                    <p className="text-center text-sm text-gray-400 mt-6">
                        Don’t have an account?
                        <Link href={route('register')} className="text-blue-400 hover:text-blue-300 ms-1" > Sign up </Link>
                    </p>
                </div>
            </div>
        </GuestLayout>
    );
}
