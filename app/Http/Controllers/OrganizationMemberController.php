<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class OrganizationMemberController extends Controller
{
    public function index()
    {
        $orgId = session('current_organization_id');

        $organization = Auth::user()->organizations()->with(['users'])->findOrFail($orgId);

        return Inertia::render('members/index', [
            'members' => $organization->users->map(function ($user) {
                return [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'role' => $user->pivot->role,
                ];
            }),
        ]);
    }
}
