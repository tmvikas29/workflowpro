import { Link, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Toast from '@/Utilities/toast';

export default function Index({ users }) {
    const status_map = {
        1: { label: "Pending", class: "bg-yellow-100 text-yellow-800", },
        2: { label: "Approved", class: "bg-green-100 text-green-800", },
        3: { label: "Rejected", class: "bg-red-100 text-red-800", },
    };

    const approveUser = (id) => {
        router.post(route('users.approve', id), {}, {
            preserveScroll: true,
            onSuccess: () => {
                Toast.success("User approved successfully");
            },
            onError: () => {
                Toast.error("Failed to approve user");
            }
        });
    };

    const rejectUser = (id) => {
        router.post(route('users.reject', id), {}, {
            preserveScroll: true,
            onSuccess: () => {
                Toast.warning("User rejected");
            },
            onError: () => {
                Toast.error("Failed to reject user");
            }
        });
    };

    return (
        <AuthenticatedLayout>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800">Users</h1>
                    <p className="text-sm text-gray-500"> Manage application users and roles </p>
                </div>
                <Link href={route('users.create')} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700" >+ Create User</Link>
            </div>

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
                                <td colSpan="4" className="px-4 py-6 text-center text-gray-500" > No users found. </td>
                            </tr>
                        )}

                        {users.map(user => (
                            <tr key={user.id} className="border-t hover:bg-gray-50" >
                                <td className="px-4 py-3"> {user.name} </td>
                                <td className="px-4 py-3"> {user.email}</td>
                                <td className="px-4 py-3">
                                    <span className="inline-flex px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">{user.role?.name} </span>
                                </td>
                                <td className="px-4 py-3 text-right space-x-2">
                                    {user.status === 1 && (
                                        <>
                                            <button onClick={() => approveUser(user.id)} className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-white bg-green-600 rounded-md hover:bg-green-700" >
                                                Approve
                                            </button>

                                            <button onClick={() => rejectUser(user.id)} className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-white bg-red-600 rounded-md hover:bg-red-700 ml-2" >
                                                Reject
                                            </button>
                                        </>
                                    )}
                                    {user.status !== 1 && (
                                        <span
                                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${status_map[user.status]?.class  }`} > {status_map[user.status]?.label}
                                        </span>
                                    )}
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
}
