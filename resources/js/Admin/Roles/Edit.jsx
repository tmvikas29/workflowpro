import { useForm, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Toast from '@/Utilities/toast';

export default function Edit({ role, permissions }) {
    const { data, setData, put, processing, errors } = useForm({
        name: role.name,
        permissions: role.permissions.map(p => p.id),
    });

    const togglePermission = (id) => {
        setData( 'permissions',data.permissions.includes(id) ? data.permissions.filter(p => p !== id) : [...data.permissions, id]);
    };

    const submit = (e) => {
        e.preventDefault();

        put(route('admin.roles.update', role.id), {
            onSuccess: () => Toast.success('Role updated successfully'),
            onError: () => Toast.error('Please fix the errors'),
        });
    };

    return (
        <AuthenticatedLayout>
            <h1 className="text-2xl font-semibold mb-6">Edit Role</h1>

            <form onSubmit={submit} className="bg-white p-6 rounded-xl border max-w-xl space-y-6" >
                <div>
                    <label className="block text-sm font-medium">Role Name</label>
                    <input className={`w-full border rounded-lg px-3 py-2 ${ errors.name ? 'border-red-500' : 'border-gray-300'  }`}
                        value={data.name} onChange={e => setData('name', e.target.value)}/>
                    {errors.name && (
                        <p className="text-sm text-red-500">{errors.name}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2"> Permissions </label>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {permissions.map(permission => (
                            <label key={permission.id} className="flex items-center space-x-2 text-sm">
                                <input type="checkbox" checked={data.permissions.includes(permission.id)} onChange={() => togglePermission(permission.id)} />
                                <span>{permission.label}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t">
                    <Link href={route('roles.index')} className="px-4 py-2 rounded-lg border" > Cancel </Link>
                    <button disabled={processing} className="px-5 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-60">Update Role</button>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}
