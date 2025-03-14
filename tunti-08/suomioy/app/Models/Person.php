<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

// Add [deathday] to fillable property to
// allow mass assignment on [App\Models\Person].

class Person extends Model
{
    // defaultti id-kenttä === id
    protected $table = 'person';

    protected $fillable = ['deathday'];

}
