import { useForm, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Toast from '@/Utilities/toast';

export default function Create({ permissions }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        permissions: [],
    });

    const togglePermission = (id) => {
        setData(
            'permissions',
            data.permissions.includes(id)
                ? data.permissions.filter(p => p !== id)
                : [...data.permissions, id]
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('admin.roles.store'), {
            onSuccess: () => Toast.success('Role created successfully'),
            onError: () => Toast.error('Please fix errors'),
        });
    };

    return (
        <AuthenticatedLayout>
            <h1 className="text-2xl font-semibold mb-6">Create Role</h1>

            <form onSubmit={submit} className="bg-white p-6 rounded-xl border max-w-xl space-y-6">

                <div>
                    <label className="block text-sm font-medium">Role Name</label>
                    <input
                        className="w-full border rounded-lg px-3 py-2"
                        value={data.name}
                        onChange={e => setData('name', e.target.value)}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">
                        Permissions
                    </label>

                    <div className="grid grid-cols-2 gap-2">
                        {permissions.map(permission => (
                            <label key={permission.id} className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={data.permissions.includes(permission.id)}
                                    onChange={() => togglePermission(permission.id)}
                                />
                                <span>{permission.label}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="flex justify-end gap-3">
                    {/* <Link href={route('admin.roles.index')} className="px-4 py-2 border rounded-lg">
                        Cancel
                    </Link> */}
                    <button
                        disabled={processing}
                        className="px-5 py-2 bg-blue-600 text-white rounded-lg"
                    >
                        Create Role
                    </button>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}
