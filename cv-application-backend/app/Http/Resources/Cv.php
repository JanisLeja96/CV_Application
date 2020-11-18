<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Cv extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'base data' => $this->baseData,
            'education' => $this->education,
            'job experience' => $this->jobs->load([
                'jobInfo',
                'jobResponsibilities',
                'jobAchievements'
            ]),
        ];
    }
}
