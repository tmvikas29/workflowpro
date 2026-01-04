import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Create account" />

            <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
                <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-700">

                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-white tracking-wide">
                            Workflow<span className="text-blue-500">Pro</span>
                        </h1>
                        <p className="text-gray-400 text-sm mt-1">
                            Create your account
                        </p>
                    </div>

                    <form onSubmit={submit} className="space-y-5">
                        <div>
                            <InputLabel htmlFor="name" value="Full name" className="text-white" />
                            <TextInput id="name" name="name"value={data.name}
                                className="mt-1 block w-full bg-gray-900 border-gray-700 text-white focus:border-blue-500 focus:ring-blue-500"
                                autoComplete="name" isFocused={true} onChange={(e) => setData('name', e.target.value)} required
                            />
                            <InputError message={errors.name} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="email" value="Email address" className="text-white" />
                            <TextInput id="email" type="email" name="email" value={data.email}
                                className="mt-1 block w-full bg-gray-900 border-gray-700 text-white focus:border-blue-500 focus:ring-blue-500"
                                autoComplete="username" onChange={(e) => setData('email', e.target.value)} required
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="password" value="Password"  className="text-white" />
                            <TextInput id="password" type="password" name="password" value={data.password}
                                className="mt-1 block w-full bg-gray-900 border-gray-700 text-white focus:border-blue-500 focus:ring-blue-500"
                                autoComplete="new-password" onChange={(e) => setData('password', e.target.value)} required
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel  htmlFor="password_confirmation" value="Confirm password" className="text-white" />
                            <TextInput id="password_confirmation" type="password" name="password_confirmation" value={data.password_confirmation}
                                className="mt-1 block w-full bg-gray-900 border-gray-700 text-white focus:border-blue-500 focus:ring-blue-500"
                                autoComplete="new-password" onChange={(e) => setData('password_confirmation', e.target.value) } required
                            />
                            <InputError message={errors.password_confirmation} className="mt-2"/>
                        </div>

                        <PrimaryButton className="w-full justify-center bg-blue-600 hover:bg-blue-700" disabled={processing}> Create account </PrimaryButton>
                    </form>

                    <p className="text-center text-sm text-gray-400 mt-6">
                        Already have an account?
                        <Link href={route('login')} className="text-blue-400 hover:text-blue-300 ms-1" > Log in </Link>
                    </p>
                </div>
            </div>
        </GuestLayout>
    );
}
