import { Link } from '@inertiajs/react';
import {
    Users,
    ShieldCheck,
    LayoutDashboard,
    Workflow,
    Copyright,
} from 'lucide-react';

export default function Welcome() {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <header className="flex justify-between items-center px-10 py-6 border-b border-gray-800">
                <h1 className="text-2xl font-bold tracking-wide">
                    Workflow<span className="text-blue-500">Pro</span>
                </h1>

                <div className="flex gap-4">
                    <Link href={route('login')} className="text-gray-300 px-4 py-2 hover:text-white"  > Login</Link>
                    <Link href={route('register')} className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"> Sign Up </Link>
                </div>
            </header>

            <section className="text-center px-6 py-24 max-w-5xl mx-auto">
                <h2 className="text-5xl font-extrabold leading-tight">Manage Your Workflow <br />
                    <span className="text-blue-500">Smarter & Faster</span>
                </h2>

                <p className="mt-6 text-gray-400 text-lg">
                    WorkflowPro helps teams manage users, roles and workflows
                    with clarity, security and speed.
                </p>

                <div className="mt-10 flex justify-center gap-4">
                    <Link href={route('register')} className="bg-blue-600 px-6 py-3 rounded-lg text-lg hover:bg-blue-700" >
                        Get Started
                    </Link>

                    <Link href={route('login')} className="border border-gray-600 px-6 py-3 rounded-lg text-lg hover:bg-gray-800">
                        Login
                    </Link>
                </div>
            </section>
            {/* Service section  */}
            <section className="bg-gray-800 py-20 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-12">
                        What We Offer
                    </h3>

                    <div className="grid md:grid-cols-4 gap-8">
                        <ServiceCard
                            icon={Users}
                            title="User Management"
                            text="Create, manage and control users with role-based access."
                        />
                        <ServiceCard
                            icon={ShieldCheck}
                            title="Role Security"
                            text="Secure your system using strong role and permission logic."
                        />
                        <ServiceCard
                            icon={LayoutDashboard}
                            title="Admin Dashboard"
                            text="Clean and powerful dashboards for admins and users."
                        />
                        <ServiceCard
                            icon={Workflow}
                            title="Workflow Control"
                            text="Structured workflows that scale with your business."
                        />
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-3xl font-bold mb-4">
                            Built for Real Teams
                        </h3>
                        <p className="text-gray-400">
                            WorkflowPro is designed with real-world business
                            needs in mind — fast, secure, and scalable.
                        </p>
                    </div>

                    <ul className="space-y-4 text-gray-300">
                        <li>* Role based access control</li>
                        <li>* Clean admin panel UI</li>
                        <li>* Secure authentication</li>
                        <li>* Scalable architecture</li>
                    </ul>
                </div>
            </section>

            <section className="bg-blue-600 py-20 text-center">
                <h3 className="text-4xl font-bold mb-4"> Ready to Get Started? </h3>
                <p className="mb-6 text-lg"> Create your account and start managing workflows today. </p>

                <Link href={route('register')}  className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100"  >
                    Create Free Account
                </Link>
            </section>

            <footer className="text-center py-6 text-gray-400 bg-gray-900">
                <div className="flex items-center justify-center gap-1 text-sm">
                    <Copyright size={14} />
                    <span>{new Date().getFullYear()} WorkflowPro. All rights reserved.</span>
                </div>
            </footer>

        </div>
    );
}

function ServiceCard({ icon: Icon, title, text }) {
    return (
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition">
            <Icon size={32} className="text-blue-500 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold mb-2">{title}</h4>
            <p className="text-gray-400 text-sm">{text}</p>
        </div>
    );
}
