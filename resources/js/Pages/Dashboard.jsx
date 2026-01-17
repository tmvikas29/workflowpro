import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DashboardWidgets from './Dashboard/Widgets/DashboardWidgets';

export default function Dashboard({ stats ,permissions}) {
    console.log('stats',stats)
    return (
        <AuthenticatedLayout>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">
                    Dashboard
                </h1>
                <p className="text-gray-500 mt-1">
                    Monitor users, roles and system activity
                </p>
            </div>
            <DashboardWidgets stats={stats} permissions={permissions} />
        </AuthenticatedLayout>
    );
}
