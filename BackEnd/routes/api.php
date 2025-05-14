<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminUserController;
use App\Http\Controllers\PigController;
use App\Http\Controllers\HealthMonitoringController;
use App\Http\Controllers\PigBreedController;
use App\Http\Controllers\VetAssignmentController;
use App\Http\Controllers\VetAssistanceRequestController;
use App\Http\Controllers\VetVisitController;
use App\Http\Controllers\VaccinationRecordController;
use App\Http\Controllers\{
    ChatController,
    MessageController,
    CommentController,
    LikeController,
    ReportController
};

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('/register', [UserController::class, 'register']);
    Route::post('/login', [UserController::class, 'login']);    
});

// Admin-only routes
Route::middleware(['auth:api', 'admin'])->prefix('admin')->group(function () {
    Route::get('/users', [AdminUserController::class, 'index']);
    Route::post('/users', [AdminUserController::class, 'store']);
    Route::put('/users/{id}', [AdminUserController::class, 'update']);
    Route::delete('/users/{id}', [AdminUserController::class, 'destroy']);
});


// Authenticated user's own profile
Route::middleware('auth:api')->group(function () {
    Route::get('/users/profile', [AdminUserController::class, 'showOwnProfile']);
    Route::put('/users/profile', [AdminUserController::class, 'updateOwnProfile']);
});

Route::prefix('pigs')->group(function () {
    Route::get('/', [PigController::class, 'index']);
    Route::post('/', [PigController::class, 'store']);
    Route::get('/{id}', [PigController::class, 'show']);
});

Route::prefix('health')->group(function () {
    Route::post('/', [HealthMonitoringController::class, 'store']);
    Route::get('/pig/{pigId}', [HealthMonitoringController::class, 'byPig']);
});



Route::middleware(['auth:api', 'admin'])->prefix('pig-breeds')->group(function () {
    Route::get('/', [PigBreedController::class, 'index']);  // View all breeds
    Route::post('/', [PigBreedController::class, 'store']);  // Add a breed (Admin)
    Route::put('/{id}', [PigBreedController::class, 'update']);  // Update a breed (Admin)
    Route::delete('/{id}', [PigBreedController::class, 'destroy']);  // Delete a breed (Admin)
});

Route::middleware('auth:api')->group(function () {
    Route::post('/assign-vet', [VetAssignmentController::class, 'assignVet']);
    Route::get('/vet/{vetId}/farmers', [VetAssignmentController::class, 'getAssignedFarmers']);
    Route::get('/farmer/{farmerId}/vet', [VetAssignmentController::class, 'getAssignedVet']);
});

Route::middleware('auth:api')->group(function () {
    Route::post('/assistance-request', [VetAssistanceRequestController::class, 'store']);
    Route::get('/vet/assistance-requests', [VetAssistanceRequestController::class, 'index']);
    Route::put('/assistance-request/{id}/status', [VetAssistanceRequestController::class, 'updateStatus']);
});

Route::middleware('auth:api')->group(function () {
    Route::post('/vet-visits', [VetVisitController::class, 'store']);
    Route::get('/vet/{vetId}/visits', [VetVisitController::class, 'vetVisits']);
    Route::get('/farmer/{farmerId}/visits', [VetVisitController::class, 'farmerVisits']);
});

Route::middleware(['auth:api'])->group(function () {
    Route::post('/vaccination-records', [VaccinationRecordController::class, 'store']);
    Route::get('/pig/{pigId}/vaccinations', [VaccinationRecordController::class, 'getPigVaccinations']);
});


Route::middleware(['auth:api'])->group(function () {
    // Chat
    Route::post('chats', [ChatController::class, 'create']);
    Route::get('chats/{id}/messages', [ChatController::class, 'getMessages']);

    // Message
    Route::post('chats/{chatId}/messages', [MessageController::class, 'postMessage']);

    // Comment
    Route::post('messages/{messageId}/comments', [CommentController::class, 'postComment']);

    // Like
    Route::post('messages/{messageId}/like', [LikeController::class, 'like']);

    // Report
    Route::post('messages/{messageId}/report', [ReportController::class, 'report']);
});