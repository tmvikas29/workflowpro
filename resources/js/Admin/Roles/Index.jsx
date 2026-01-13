import { Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Index({ roles }) {
    return (
        <AuthenticatedLayout>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800">Roles</h1>
                    <p className="text-sm text-gray-500"> Manage roles and their permissions</p>
                </div>

                <Link href={route('roles.create')} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"> + Create Role </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                <table className="min-w-full text-sm">
                    <thead className="bg-gray-50 text-gray-600">
                        <tr>
                            <th className="px-4 py-3 text-left">Role Name</th>
                            <th className="px-4 py-3 text-left">Permissions</th>
                            <th className="px-4 py-3 text-right">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {roles.length === 0 && (
                            <tr>
                                <td colSpan="3" className="px-4 py-6 text-center text-gray-500" >
                                    No roles found.
                                </td>
                            </tr>
                        )}

                        {roles.map(role => (
                            <tr key={role.id} className="border-t hover:bg-gray-50" >
                                <td className="px-4 py-3 font-medium text-gray-800"> {role.name}  </td>
                                <td className="px-4 py-3">
                                    {role.permissions.length === 0 ? (
                                        <span className="text-xs text-gray-500"> No permissions assigned</span>
                                    ) : (
                                        <div className="flex flex-wrap gap-1">
                                            {role.permissions.map(permission => (
                                                <span key={permission.id} className="inline-flex px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700"  >
                                                    {permission.label}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </td>

                                <td className="px-4 py-3 text-right space-x-2">
                                    {/* <Link href={route('admin.roles.edit', role.id)} className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-blue-700 bg-blue-100 rounded-md hover:bg-blue-200"  >
                                        Edit
                                    </Link> */}

                                    {/*
                                    <button className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-red-700 bg-red-100 rounded-md hover:bg-red-200">
                                        Delete
                                    </button>
                                    */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
}
