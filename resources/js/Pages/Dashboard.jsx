import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Users, Shield } from 'lucide-react';

export default function Dashboard({ stats }) {
    const Card = ({ title, value, Icon }) => (
        <div className="bg-white rounded-xl shadow-sm p-6 flex items-center gap-4">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                <Icon size={24} />
            </div>
            <div>
                <p className="text-sm text-gray-500">{title}</p>
                <h2 className="text-2xl font-bold">{value}</h2>
            </div>
        </div>
    );

    return (
        <AuthenticatedLayout>
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

            {/* Stats cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card title="Total Users" value={stats.users} Icon={Users} />
                <Card title="Total Roles" value={stats.roles} Icon={Shield} />
            </div>

            {/* Welcome section */}
            <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-lg font-semibold mb-2">
                    Welcome to WorkflowPro 👋
                </h2>
                <p className="text-gray-600">
                    Manage users, roles and future business modules from a single dashboard.
                </p>
            </div>
        </AuthenticatedLayout>
    );
}
