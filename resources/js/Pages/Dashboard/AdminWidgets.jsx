import { Link } from '@inertiajs/react';
import { Users, UserPlus, ShieldCheck, Activity} from 'lucide-react';

export default function AdminWidgets({ stats }) {
    return (
        <div className="space-y-8">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard icon={Users} title="Total Users" value={stats.total_users} color="blue"  />
                <StatCard icon={ShieldCheck} title="Roles" value={stats.total_roles} color="emerald" />
                <StatCard icon={Activity} title="Active Users" value={stats.active_users ?? '—'} color="violet" />
                <StatCard icon={UserPlus} title="New Users" value={stats.new_users ?? '—'} color="orange"/>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border">
                    <div className="flex justify-between items-center px-5 py-4 border-b">
                        <h3 className="font-semibold text-gray-800">   Recent Activity  </h3>

                        <Link  href="/admin/users"  className="text-sm text-blue-600 hover:underline" >
                            View all
                        </Link>
                    </div>

                    <div className="p-5 text-sm text-gray-500">
                        Recent users and system activity will appear here.
                    </div>
                </div>

                {/* QUICK ACTIONS */}
                <div className="bg-white rounded-xl shadow-sm border p-5">
                    <h3 className="font-semibold text-gray-800 mb-4">
                        Quick Actions
                    </h3>

                    <div className="flex flex-col gap-3">
                        <ActionButton
                            href="/admin/users/create"
                            icon={UserPlus}
                            label="Create User"
                            primary
                        />

                        <ActionButton
                            href="/admin/users"
                            icon={Users}
                            label="Manage Users"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ===== SMALL COMPONENTS ===== */

function StatCard({ icon: Icon, title, value, color }) {
    const colors = {
        blue: 'bg-blue-50 text-blue-600',
        emerald: 'bg-emerald-50 text-emerald-600',
        violet: 'bg-violet-50 text-violet-600',
        orange: 'bg-orange-50 text-orange-600',
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border p-5 flex items-center gap-4">
            <div className={`p-3 rounded-lg ${colors[color]}`}>
                <Icon size={22} />
            </div>

            <div>
                <p className="text-sm text-gray-500">{title}</p>
                <p className="text-2xl font-semibold text-gray-800">
                    {value}
                </p>
            </div>
        </div>
    );
}

function ActionButton({ href, icon: Icon, label, primary = false }) {
    return (
        <Link
            href={href}
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition
                ${
                    primary
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'border text-gray-700 hover:bg-gray-50'
                }
            `}
        >
            <Icon size={16} />
            {label}
        </Link>
    );
}
