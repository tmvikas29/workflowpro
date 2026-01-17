import AdminStats from './AdminStats';
import QuickActions from './QuickActions';
import ActivityWidget from './ActivityWidget';

export default function DashboardWidgets({ stats, permissions }) {
    const can = (perm) => permissions.includes(perm);

    return (
        <div className="space-y-8">

            {/* STATS – no permission */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <AdminStats title="Total Users" value={stats.total_users} />
                <AdminStats title="Total Roles" value={stats.total_roles} />
                <AdminStats title="Active Users" value={stats.active_users ?? 0} />
                <AdminStats title="New Users (7 days)" value={stats.new_users ?? 0} />
            </div>

            {/* ACTION AREA */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Activity – optional, no permission for now */}
                <div className="lg:col-span-2 bg-white rounded-2xl border shadow-sm">
                    <div className="px-6 py-4 border-b">
                        <h3 className="text-lg font-semibold">
                            Recent Activity
                        </h3>
                    </div>
                    <div className="p-6 text-sm text-gray-500">
                        No recent activity yet.
                    </div>
                </div>

                {/* Quick Actions – permission based */}
                {can('create_users') && <QuickActions />}
            </div>
        </div>
    );
}

