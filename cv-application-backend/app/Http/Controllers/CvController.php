<?php

namespace App\Http\Controllers;

use App\Http\Resources\CvCollection;
use App\Models\Cv;
use Illuminate\Http\Request;
use App\Http\Resources\Cv as CvResource;

class CvController extends Controller
{

    public function index()
    {
        return new CvCollection(Cv::all());
    }

    public function show($id)
    {
        return new CvResource(Cv::findOrFail($id));
    }
}
