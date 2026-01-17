import { Users } from 'lucide-react';

export default function AdminStats({ title, value, icon: Icon = Users }) {
    return (
        <div className="bg-white rounded-2xl border shadow-sm p-6 flex items-center justify-between">
            <div>
                <p className="text-sm text-gray-500">{title}</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">
                    {value}
                </p>
            </div>

            <div className="p-4 bg-indigo-50 rounded-xl text-indigo-600">
                <Icon size={26} />
            </div>
        </div>
    );
}
