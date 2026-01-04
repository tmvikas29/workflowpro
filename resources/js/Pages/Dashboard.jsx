import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { usePage } from '@inertiajs/react';
import AdminWidgets from './Dashboard/AdminWidgets';
import UserWidgets from './Dashboard/UserWidgets';

export default function Dashboard({ stats }) {
    const { auth } = usePage().props;
    const role = auth.user?.role?.name;

    console.log('reole',role)

    return (
        <AuthenticatedLayout>
            <div className="mb-6">
                <h1 className="text-2xl font-semibold text-gray-800">
                    {role === 'admin' ? 'Admin Dashboard' : 'Dashboard'}
                </h1>

                <p className="text-sm text-gray-500">
                    {role === 'admin' ? 'System overview and administration' : 'Your account overview'}
                </p>
            </div>
            {role === 'admin' ? (
                <AdminWidgets stats={stats} />
            ) : (
                <UserWidgets />
            )}
        </AuthenticatedLayout>
    );
}
