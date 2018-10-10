<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Preference;

class PreferenceController extends Controller
{
    public function index() {
        return Preference::all();
    }

    public function show($id) {
        return Preference::find($id);
    }

    public function getForUser($uid) {
        return Preference::where('user_id', $uid)->get();  
    }

    public function store(Request $request) {
        return Preference::create($request->all());
    }

    public function update(Request $request, $id) {
        $preference = Preference::findOrFail($id);
        $preference->update($request->all());

        return $preference;
    }

    public function delete(Request $request, $id) {
        $preference = Preference::findOrFail($id);
        $preference->delete();

        return 204;
    }

/*    public function remove(Request $request) {
        $preference =  Preference::where('user_id', $request->user_id)->get();  
        $preference->delete();
        return 204;
        return 204;
}
 */
}
