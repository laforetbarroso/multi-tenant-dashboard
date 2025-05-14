import { useForm } from '@inertiajs/react';
import { FormEvent } from 'react';

export default function ProjectCreate() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        description: '',
    });

    const submit = (e : FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        post(route('projects.store'));
    };

    return (
        <form onSubmit={ submit } className="space-y-4 max-w-lg">
            <h1 className="text-xl font-bold">Create Project</h1>

            <div>
                <label>Name</label>
                <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    className="w-full p-2 border rounded"
                />
                {errors.name && <div className="text-red-600">{errors.name}</div>}
            </div>

            <div>
                <label>Description</label>
                <textarea
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                    className="w-full p-2 border rounded"
                />
                {errors.description && (
                    <div className="text-red-600">{errors.description}</div>
                )}
            </div>

            <button
                type="submit"
                disabled={processing}
                className="px-4 py-2 bg-blue-600 text-white rounded"
            >
                Save
            </button>
        </form>
    );
}
