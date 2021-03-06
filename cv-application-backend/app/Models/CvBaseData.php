<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CvBaseData extends Model
{
    use HasFactory;

    protected $guarded = [];
    protected $table = 'cv_base_data';

    public function cv()
    {
        return $this->belongsTo(Cv::class);
    }
}
