<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('person', function (Blueprint $table) {
            $table->nullableTimestamps();
        });

        DB::table('person')->update([
            'created_at' => '1978-03-21'
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('person', function (Blueprint $table) {
            $table->dropTimestamps();
        });

    }
};
