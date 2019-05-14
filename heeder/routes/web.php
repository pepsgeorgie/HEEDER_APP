<?php

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
    return view('welcome');
});

Route::get('ajaxdata/addUser', 'CrudController@addUser')->name('ajaxdata.addUser');
Route::get('ajaxdata/login', 'CrudController@login')->name('ajaxdata.login');
Route::get('ajaxdata/logout', 'CrudController@logout')->name('ajaxdata.logout');
Route::get('ajaxdata/profile', 'CrudController@profile')->name('ajaxdata.profile');
Route::get('ajaxdata/addChannel', 'CrudController@addChannel')->name('ajaxdata.addChannel');
Route::get('ajaxdata/viewChannel', 'CrudController@viewChannel')->name('ajaxdata.viewChannel');
Route::get('ajaxdata/viewStudentChannel', 'CrudController@viewStudentChannel')->name('ajaxdata.viewStudentChannel');
Route::get('ajaxdata/deleteChannel', 'CrudController@deleteChannel')->name('deleteChannel');
Route::get('ajaxdata/updateChannel', 'CrudController@updateChannel')->name('updateChannel');
Route::get('ajaxdata/record', 'CrudController@record')->name('record');
Route::get('ajaxdata/viewRecord', 'CrudController@viewRecord')->name('viewRecord');
Route::get('ajaxdata/insertCode', 'CrudController@insertCode')->name('insertCode');
Route::get('ajaxdata/viewStudentStream', 'CrudController@viewStudentStream')->name('viewStudentStream');
Route::get('ajaxdata/viewStream', 'CrudController@viewStream')->name('viewStream');
Route::get('ajaxdata/inActive', 'CrudController@inActive')->name('inActive');

