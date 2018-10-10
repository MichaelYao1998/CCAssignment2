<?php

use Illuminate\Http\Request;
use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login', function (Request $request) {
    $credentials = $request->only('email', 'password');
    if (Auth::attempt($credentials)) {
        return Auth::user();
    }
});

Route::post('register', function (Request $request) {
    return User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password),
    ]);
});

//Routes for areas which define a state location and xml filename for more data
Route::get('areas', 'AreaController@index');
Route::get('areas/{id}', 'AreaController@show');
Route::get('areas/state/{state}', 'AreaController@getByState');
Route::get('areas/name/{name}', 'AreaController@getByName');
Route::post('areas', 'AreaController@store');
Route::put('areas/{id}', 'AreaController@update');
Route::delete('areas/{id}', 'AreaController@delete');

Route::get('preferences', 'PreferenceController@index');
Route::get('preferences/{id}', 'PreferenceController@show');
Route::get('preferences/user/{state}', 'PreferenceController@getForUser');
Route::post('preferences', 'PreferenceController@store');
Route::put('preferences/{id}', 'PreferenceController@update');
Route::delete('preferences/{id}', 'PreferenceController@delete');

Route::get('forecasts/{name}', 'ForecastController@show');
