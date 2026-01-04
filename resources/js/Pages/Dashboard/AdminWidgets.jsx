import { Users, Shield } from 'lucide-react';

export default function AdminWidgets({ stats }) {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="Total Users" value={stats.users} Icon={Users} />
            <Card title="Total Roles" value={stats.roles} Icon={Shield} />
        </div>
    );
}
