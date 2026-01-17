export default function ActivityWidget() {
    return (
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border">
            <div className="px-6 py-4 border-b">
                <h3 className="text-lg font-semibold text-gray-800">
                    Recent Activity
                </h3>
            </div>

            <div className="p-6 text-gray-500 text-sm">
                No recent activity yet.
            </div>
        </div>

    );
}
