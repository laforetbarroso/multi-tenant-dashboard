<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::where('organization_id', session('current_organization_id'))->latest()->get();

        return Inertia::render('projects/index', [
            'projects' => $projects,
        ]);
    }

    public function create()
    {
        return Inertia::render('projects/create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        Project::create([
            'organization_id' => session('current_organization_id'),
            'name' => $request->name,
            'description' => $request->description,
        ]);

        return redirect()->route('projects.index')->with('success', 'Project created.');
    }

    public function edit(Project $project)
    {
        $this->authorizeOrg($project);

        return Inertia::render('projects/edit', ['project' => $project]);
    }

    public function update(Request $request, Project $project)
    {
        $this->authorizeOrg($project);

        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        $project->update($request->only(['name', 'description']));

        return redirect()->route('projects.index')->with('success', 'Project updated.');
    }

    public function destroy(Project $project)
    {
        $this->authorizeOrg($project);
        $project->delete();

        return redirect()->route('projects.index')->with('success', 'Project deleted.');
    }

    private function authorizeOrg(Project $project)
    {
        if ($project->organization_id !== session('current_organization_id')) {
            abort(403);
        }
    }
}
