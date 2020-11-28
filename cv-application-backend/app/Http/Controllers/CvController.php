<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRequest;
use App\Http\Resources\CvCollection;
use App\Models\Cv;
use App\Services\CvService;
use Illuminate\Http\Request;
use App\Http\Resources\Cv as CvResource;
use function GuzzleHttp\json_decode;

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

    public function store(StoreRequest $request)
    {
        $result['data'] = (new CvService($request))->execute();
        $result['status'] = 201;

        return response()->json($result, $result['status']);
    }

    public function destroy($id)
    {
        $cv = Cv::find($id);

        if ($cv->exists()) {
            $cv->delete();
            return response()->json('Delete successful', 200);
        }
        return response()->json('Not found', 404);
    }

    public function update($id, Request $request)
    {
        $result['data'] = (new CvService($request, $id))->execute();
        $result['status'] = 200;

        return response()->json($request, $result['status']);
    }
}
