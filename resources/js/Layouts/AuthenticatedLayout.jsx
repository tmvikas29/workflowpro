import { Link, usePage } from '@inertiajs/react';
import {
    Home,
    Users,
    Settings,
    LogOut,
    LayoutDashboard
} from 'lucide-react';

export default function AuthenticatedLayout({ children }) {
    const { auth } = usePage().props;
    const role = auth.user?.role?.name;
    const currentUrl = window.location.pathname;

    const navItem = (href, label, Icon) => (
        <Link  href={href}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition
            ${currentUrl.startsWith(href)  ? 'bg-blue-600 text-white': 'text-gray-300 hover:bg-gray-800 hover:text-white'  }`}
        >
            <Icon size={18} />
            <span>{label}</span>
        </Link>
    );

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-900 text-white flex flex-col">
                <div className="px-5 py-4 border-b border-gray-800">
                    <h1 className="text-xl font-bold tracking-wide">
                        Workflow<span className="text-blue-500">Pro</span>
                    </h1>
                </div>

                <nav className="flex-1 p-3 space-y-1">
                    {navItem('/dashboard', 'Dashboard', LayoutDashboard)}

                    {role === 'admin' && (
                        <>
                            {navItem('/admin', 'Admin Panel', Home)}
                            {navItem('/admin/users', 'Users', Users)}
                        </>
                    )}
                </nav>
                <div className="border-t border-gray-800 p-4">
                    <div className="text-sm text-gray-300 mb-2">
                        {auth.user.name}
                    </div>

                    <div className="flex flex-col gap-2">
                        <Link
                            href={route('profile.edit')}
                            className="flex items-center gap-2 text-gray-300 hover:text-white"
                        >
                            <Settings size={16} />
                            Profile
                        </Link>

                        <Link
                            method="post"
                            as="button"
                            href={route('logout')}
                            className="flex items-center gap-2 text-red-400 hover:text-red-300"
                        >
                            <LogOut size={16} />
                            Logout
                        </Link>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}
