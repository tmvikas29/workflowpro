import { Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Index({ users }) {
    console.log('usrs',users)
    return (
        <AuthenticatedLayout>
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800">Users</h1>
                    <p className="text-sm text-gray-500">
                        Manage application users and roles
                    </p>
                </div>

                <Link
                    href={route('admin.users.create')}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                    + Create User
                </Link>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                <table className="min-w-full text-sm">
                    <thead className="bg-gray-50 text-gray-600">
                        <tr>
                            <th className="px-4 py-3 text-left">Name</th>
                            <th className="px-4 py-3 text-left">Email</th>
                            <th className="px-4 py-3 text-left">Role</th>
                            <th className="px-4 py-3 text-right">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.length === 0 && (
                            <tr>
                                <td
                                    colSpan="4"
                                    className="px-4 py-6 text-center text-gray-500"
                                >
                                    No users found.
                                </td>
                            </tr>
                        )}

                        {users.map(user => (
                            <tr
                                key={user.id}
                                className="border-t hover:bg-gray-50"
                            >
                                <td className="px-4 py-3">
                                    {user.name}
                                </td>
                                <td className="px-4 py-3">
                                    {user.email}
                                </td>
                                <td className="px-4 py-3">
                                    <span className="inline-flex px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                                        {user.role?.name}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-right space-x-2">
                                    {/* <Link
                                        href={route('admin.users.edit', user.id)}
                                        className="text-blue-600 hover:underline"
                                    >
                                        Edit
                                    </Link> */}

                                    <button className="text-red-600 hover:underline">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
}
