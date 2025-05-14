import { Head, Link, router, usePage } from '@inertiajs/react';
import { TentantSharedData, Project, type BreadcrumbItem } from '@/types';
import AppLayout from '@/layouts/app-layout';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Projects',
        href: '/projects',
    },
];

export default function ProjectIndex({ projects  } : { projects : Project[] }) {
    const { flash } = usePage<TentantSharedData>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Projects" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">

                <Link
                    href={route('projects.create')}
                    className="self-end px-4 py-2 w-auto bg-blue-600 text-white rounded"
                >
                    Create New Project
                </Link>

                {flash.success && (
                    <div className="mb-4 p-2 bg-green-100 text-green-700 rounded flex justify-center">
                        {flash.success}
                    </div>
                )}

                <ul className="space-y-3">
                    {projects.map((project : Project) => (
                        <li key={project.id} className="p-4 bg-sidebar rounded">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h2 className="text-lg font-semibold">{project.name}</h2>
                                    <p className="text-sm">{project.description}</p>
                                </div>
                                <div className="flex gap-2">
                                    <Link
                                        href={route('projects.edit', project.id)}
                                        className="text-blue-500 hover:underline"
                                    >
                                        Edit
                                    </Link>
                                    <form
                                        method="post"
                                        action={route('projects.destroy', project.id)}
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            router.delete(route('projects.destroy', project.id));
                                        }}
                                    >
                                        <button className="text-red-500 hover:underline">Delete</button>
                                    </form>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </AppLayout>
    );
}
