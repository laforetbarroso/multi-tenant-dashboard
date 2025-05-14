<?php

use App\Http\Controllers\OrganizationSwitchController;
use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('/organization/select', [OrganizationSwitchController::class, 'select'])->name('organization.select');
    Route::post('/organization/switch', [OrganizationSwitchController::class, 'switch'])->name('organization.switch');

    // All org-aware routes:
    Route::middleware('org.selected')->group(function () {
        Route::get('/dashboard', fn () => Inertia::render('dashboard'))->name('dashboard');
        Route::resource('projects', ProjectController::class);
    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
