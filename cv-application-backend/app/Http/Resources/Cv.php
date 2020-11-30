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
            'document_name' => $this->document_name,
            'base_data' => $this->baseData,
            'education' => $this->education->all(),
            'address' => $this->address,
            'jobs' => $this->jobs->load([
                'jobResponsibilities',
                'jobAchievements'
            ]),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
