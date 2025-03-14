<?php

namespace App\Http\Controllers;

use App\Models\Person;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class PersonController extends Controller
{
    public function post(string $id, Request $request): RedirectResponse
    {
        sleep(2);

        $data = $request->validate([
            'deathday' => [
                'required',
                Rule::date()->beforeOrEqual(today()),
            ]
        ]);

        Person::findOrFail($id)->update($data);

        // todo: this is not very robust for real life yet!

        /*
        DB::table('person')
            ->where('id', '=', $id)
            ->update($data);
        */

        return to_route('person', ['id' => $id]);


    }

    public function view(string $id)
    {
        $person = Person::findOrFail($id);

        /*
        $person = DB::table('person')
            ->select([
                // fetching all columns is evil, don't do it in real life!
                '*',
            ])
            ->where('id', '=', $id)
            ->firstOrFail();
        */

        return Inertia::render('person', [
            'person' => $person,
        ]);


    }
}
