import { Link, router, usePage } from '@inertiajs/react';
import { TentantSharedData, Project } from '@/types';

export default function ProjectIndex({ projects  } : { projects : Project[] }) {
    const { flash } = usePage<TentantSharedData>().props;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Projects</h1>

            {flash.success && (
                <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">
                    {flash.success}
                </div>
            )}

            <Link
                href={route('projects.create')}
                className="mb-4 inline-block px-4 py-2 bg-blue-600 text-white rounded"
            >
                Create New Project
            </Link>

            <ul className="space-y-3">
                {projects.map((project : Project) => (
                    <li key={project.id} className="p-4 bg-gray-100 rounded">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-lg font-semibold">{project.name}</h2>
                                <p className="text-sm text-gray-600">{project.description}</p>
                            </div>
                            <div className="flex gap-2">
                                <Link
                                    href={route('projects.edit', project.id)}
                                    className="text-blue-600 hover:underline"
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
                                    <button className="text-red-600 hover:underline">Delete</button>
                                </form>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
