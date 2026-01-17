import { Link } from '@inertiajs/react';
import { Users, UserPlus } from 'lucide-react';

export default function QuickActions() {
    return (
        <div className="bg-white rounded-2xl border shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-5">
                Quick Actions
            </h3>

            <div className="space-y-3">
                <Link
                    href="/admin/users/create"
                    className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
                >
                    Create User
                </Link>

                <Link
                    href="/admin/users"
                    className="flex items-center justify-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-50"
                >
                    Manage Users
                </Link>
            </div>
        </div>

    );
}
