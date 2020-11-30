<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class CvEducation extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function getStartedAtAttribute($value) {
        $this->attributes['started_at'] = Carbon::parse($value)->format('y-M-d');
    }
}
