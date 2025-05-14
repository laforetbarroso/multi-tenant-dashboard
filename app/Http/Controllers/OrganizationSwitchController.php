<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OrganizationSwitchController extends Controller
{
    public function select()
    {
        $organizations = auth()->user()->organizations;

        return inertia('organizations/switch', [
            'organizations' => $organizations,
        ]);
    }

    public function switch(Request $request)
    {
        $request->validate([
            'organization_id' => 'required|exists:organizations,id',
        ]);

        // Check user has access
        $org = auth()->user()->organizations()->findOrFail($request->organization_id);

        session(['current_organization_id' => $org->id]);

        return redirect()->route('dashboard'); // or wherever
    }
}
