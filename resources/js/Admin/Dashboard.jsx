import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import { Users, Shield, UserPlus } from 'lucide-react';

export default function Dashboard({ stats, recentUsers }) {
    return (
        <AuthenticatedLayout>
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-semibold text-gray-800">
                    Welcome back, Admin 👋
                </h1>
                <p className="text-sm text-gray-500">
                    Here’s what’s happening in your system today
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <StatCard
                    icon={Users}
                    label="Total Users"
                    value={stats.total_users}
                />
                <StatCard
                    icon={Shield}
                    label="Total Roles"
                    value={stats.total_roles}
                />
                <StatCard
                    icon={UserPlus}
                    label="New Users (Last 7 Days)"
                    value={stats.new_users_7_days}
                />
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Recent Users */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border">
                    <div className="flex justify-between items-center px-5 py-4 border-b">
                        <span className="font-medium">Recent Users</span>
                        <Link
                            href="/admin/users"
                            className="text-sm text-blue-600 hover:underline"
                        >
                            View all
                        </Link>
                    </div>

                    <table className="w-full text-sm">
                        <thead className="bg-gray-50 text-gray-600">
                            <tr>
                                <th className="px-5 py-3 text-left">Name</th>
                                <th className="px-5 py-3 text-left">Email</th>
                                <th className="px-5 py-3 text-left">Role</th>
                                <th className="px-5 py-3 text-left">Joined</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentUsers.map(user => (
                                <tr key={user.id} className="border-t">
                                    <td className="px-5 py-3">{user.name}</td>
                                    <td className="px-5 py-3">{user.email}</td>
                                    <td className="px-5 py-3 capitalize">
                                        {user.role?.name}
                                    </td>
                                    <td className="px-5 py-3">
                                        {new Date(user.created_at).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))}

                            {recentUsers.length === 0 && (
                                <tr>
                                    <td
                                        colSpan="4"
                                        className="px-5 py-10 text-center text-gray-400"
                                    >
                                        No users yet. Start by creating your first user.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-xl shadow-sm border p-5">
                    <h3 className="font-medium mb-4">Quick Actions</h3>

                    <div className="flex flex-col gap-3">
                        <Link
                            href="/admin/users/create"
                            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                        >
                            <UserPlus size={16} />
                            Create User
                        </Link>

                        <Link
                            href="/admin/users"
                            className="flex items-center justify-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-50"
                        >
                            <Users size={16} />
                            Manage Users
                        </Link>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

function StatCard({ icon: Icon, label, value }) {
    return (
        <div className="bg-white rounded-xl shadow-sm border p-5 flex items-center gap-4">
            <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                <Icon size={22} />
            </div>
            <div>
                <div className="text-sm text-gray-500">{label}</div>
                <div className="text-xl font-semibold">{value}</div>
            </div>
        </div>
    );
}
