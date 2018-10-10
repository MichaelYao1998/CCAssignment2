<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Preference extends Model {
    protected $fillable = ['user_id', 'area_id'];
}
