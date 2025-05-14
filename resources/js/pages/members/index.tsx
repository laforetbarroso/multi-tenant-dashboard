import { Head, Link, usePage } from '@inertiajs/react';
import { type BreadcrumbItem, Member, TentantSharedData } from '@/types';
import AppLayout from '@/layouts/app-layout';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Members',
        href: '/members',
    },
];

export default function MembersIndex({ members }: { members: Member[] }) {
    const { flash } = usePage<TentantSharedData>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
        <Head title="Members" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">

                <Link
                    href="#"
                    className="self-end px-4 py-2 w-auto bg-blue-600 text-white rounded"
                >
                    Invite Member
                </Link>

                {flash?.success && (
                    <div className="mb-4 p-2 bg-green-100 text-green-700 rounded flex justify-center">
                        {flash.success}
                    </div>
                )}

                <table className="w-full border mt-4">
                    <thead>
                    <tr className="bg-sidebar text-left">
                        <th className="p-2">Name</th>
                        <th className="p-2">Email</th>
                        <th className="p-2">Role</th>
                    </tr>
                    </thead>
                    <tbody>
                    {members.map((m) => (
                        <tr key={m.id} className="border-t">
                            <td className="p-2">{m.name}</td>
                            <td className="p-2">{m.email}</td>
                            <td className="p-2">{m.role}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </AppLayout>
    );
}
