<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CvAddress extends Model
{
    use HasFactory;

    protected $table = 'cv_addresses';
    protected $guarded = [];
}
