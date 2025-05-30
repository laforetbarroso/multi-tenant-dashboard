import { router } from '@inertiajs/react';
import { Organization } from '@/types';

export default function OrganizationSwitch({ organizations } : { organizations : Organization[] }) {
    const handleSwitch = (id: number) => {
        router.post(route('organization.switch'), {
            organization_id: id,
        });
    };

    return (
        <div className="p-6 max-w-lg mx-auto">
            <h1 className="text-xl font-bold mb-4">Choose an Organization</h1>
            <ul className="space-y-3">
                {organizations.map((org : Organization) => (
                    <li key={org.id}>
                        <button
                            onClick={() => handleSwitch(org.id)}
                            className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            {org.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
