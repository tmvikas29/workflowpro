import { useForm, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Create({ roles }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        role_id: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.users.store'));
    };

    return (
        <AuthenticatedLayout>
            <div className="mb-6">
                <h1 className="text-2xl font-semibold text-gray-800">
                    Create User
                </h1>
                <p className="text-sm text-gray-500">
                    Add a new user and assign a role
                </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border max-w-3xl">
                <form onSubmit={submit} className="p-6 space-y-6">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                type="text"
                                className={`mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none
                                    ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                value={data.name}
                                onChange={e => setData('name', e.target.value)}
                            />
                            {errors.name && (
                                <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                className={`mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none
                                    ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                value={data.email}
                                onChange={e => setData('email', e.target.value)}
                            />
                            {errors.email && (
                                <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            className={`mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none
                                ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                            value={data.password}
                            onChange={e => setData('password', e.target.value)}
                        />
                        <p className="text-xs text-gray-500 mt-1">
                            Minimum 6 characters
                        </p>
                        {errors.password && (
                            <p className="text-sm text-red-500 mt-1">{errors.password}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700"> Role</label>
                        <select className={`mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none
                            ${errors.role_id ? 'border-red-500' : 'border-gray-300'}`} value={data.role_id} onChange={e => setData('role_id', e.target.value)} >
                            <option value="">Select role</option>
                            {roles.map(role => (
                                <option key={role.id} value={role.id}>
                                    {role.name}
                                </option>
                            ))}
                        </select>
                        {errors.role_id && (
                            <p className="text-sm text-red-500 mt-1">{errors.role_id}</p>
                        )}
                    </div>
                    <div className="flex justify-end gap-3 pt-4 border-t">
                        <Link href={route('admin.users.index')} className="px-4 py-2 rounded-lg border text-gray-700 hover:bg-gray-100"> Cancel </Link>

                        <button type="submit" disabled={processing} className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60" > Create User </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
