import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';

export default function AuthenticatedLayout({ children }) {
    const { auth } = usePage().props;
    const role = auth.user?.role?.name;

    return (
        <div className="flex min-h-screen bg-gray-100">
            <aside className="w-64 bg-gray-900 text-white p-4">
                <h2 className="text-xl font-bold mb-6">WorkflowPro</h2>

                <nav className="space-y-2">
                    <Link href="/dashboard" className="block hover:text-blue-400"> Dashboard </Link>

                    {role === 'admin' && (
                        <>
                            <Link href="/admin" className="block hover:text-blue-400">
                                Admin Panel
                            </Link>

                            <Link href="/admin/users" className="block hover:text-blue-400">
                                Users
                            </Link>
                        </>
                    )}
                </nav>
                <div className="mt-3 space-y-1">
                    <ResponsiveNavLink href={route('profile.edit')}>
                        Profile
                    </ResponsiveNavLink>
                    <ResponsiveNavLink
                        method="post"
                        href={route('logout')}
                        as="button"
                    >
                        Log Out
                    </ResponsiveNavLink>
                </div>
            </aside>
            <main className="flex-1 p-6">
                {children}
            </main>
        </div>
    );
}
