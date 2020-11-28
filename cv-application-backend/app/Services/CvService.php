<?php

namespace App\Services;

use App\Repositories\CvRepository;

class CvService
{
    private $cvRepository;

    // TODO - Dependency Injection
    public function __construct($data, $id = null)
    {
        $this->cvRepository = new CvRepository($data, $id);
    }

    public function execute()
    {
        return $this->cvRepository->fill();
    }

}
