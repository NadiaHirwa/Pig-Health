<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('vet_visits', function (Blueprint $table) {
            $table->id();
            $table->foreignId('veterinary_id')->constrained('users');
            $table->foreignId('farmer_id')->constrained('users');
            $table->date('visit_date');
            $table->text('notes')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vet_visits');
    }
};
