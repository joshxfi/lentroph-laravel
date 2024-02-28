<?php

use App\Http\Controllers\SettingsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
  return Inertia::render('Welcome', [
    'canLogin' => Route::has('login'),
    'canRegister' => Route::has('register'),
  ]);
});

Route::get('/dashboard', function () {
  return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/feed', function () {
  return Inertia::render('Feed');
})->middleware(['auth', 'verified'])->name('feed');

Route::middleware('auth')->group(function () {
  Route::get('/settings', [SettingsController::class, 'edit'])->name('settings.edit');
  Route::patch('/settings', [SettingsController::class, 'update'])->name('settings.update');
  Route::delete('/settings', [SettingsController::class, 'destroy'])->name('settings.destroy');
});

require __DIR__ . '/auth.php';
