<?php

namespace App\Repositories;


use App\Models\Cv;
use App\Models\CvAddress;
use App\Models\CvBaseData;
use App\Models\CvEducation;
use App\Models\CvJobAchievement;
use App\Models\CvJobInfo;
use App\Models\CvJobResponsibility;
use App\Models\CvJob;

class CvRepository
{
    private $cv;
    private $data;

    public function __construct($data, $id)
    {
        $this->data = $data;
        if ($id) {
            $this->cv = Cv::find($id);
        } else {
            $this->cv = Cv::create(['document_name' => $data['document_name']]);
        }
    }

    public function fill()
    {
        $baseData = $this->data['base_data'] ? $this->setBaseData() : null;
        $education = $this->data['education'] ? $this->setEducation() : null;
        $jobs = $this->data['jobs'] ? $this->setJobs() : null;
        $jobInfo = $this->data['jobInfo'] ? $this->setJobInfo() : null;
        $address = $this->data['address'] ? $this->setAddress() : null;

        return [$this->cv,
            'base_data' => $baseData,
            'education' => $education,
            'jobs' => $jobs,
            'job_info' => $jobInfo,
            'address' => $address];
    }

    private function setBaseData()
    {
        $data = $this->data['base_data'];
        if (!isset($data['id'])) {
            $baseData = new CvBaseData();
            $baseData->fill($data);
            $baseData->cv_id = $this->cv->id;
            $baseData->save();
        } else {
            $baseData = CvBaseData::find($data['id']);
            $baseData->save($data);
        }
        return $baseData;
    }

    private function setEducation()
    {
        $cvEducation = [];
        foreach ($this->data['education'] as $education) {
            $entry = new CvEducation();
            $entry->fill($education);
            $entry->cv_id = $this->cv->id;
            $entry->save();
            $cvEducation[] = $entry;
        }
        return $cvEducation;
    }

    private function setJobs()
    {
        $cvJobs = [];
        foreach ($this->data['jobs'] as $job) {
            $cvJob = new CvJob();
            $cvJob->fill($job['data']);
            $cvJob->cv_id = $this->cv->id;
            $cvJob->save();
            $cvJobs = $this->setAchievements($job, $cvJob, $cvJobs);
            $cvJobs = $this->setResponsibilities($job, $cvJob, $cvJobs);
            $cvJobs[] = $cvJob;
        }
        return $cvJobs;
    }

    private function setAddress()
    {
        $data = $this->data['address'];
        if (!isset($data['id'])) {
            $address = new CvAddress();
            $address->fill($data);
            $address->cv_id = $this->cv->id;
            $address->save();
        } else {
            $address = CvAddress::find($data['id']);
            $address->save($data);
        }
        return $address;
    }

    private function setAchievements($job, CvJob $cvJob, array $cvJobs): array
    {
        foreach ($job['job_achievements'] as $achievement) {
            $cvJobAchievement = new CvJobAchievement();
            $cvJobAchievement->fill($achievement);
            $cvJobAchievement->job_id = $cvJob->id;
            $cvJobAchievement->save();
            $cvJobs['achievements'][] = $cvJobAchievement;
        }
        return $cvJobs;
    }

    private function setResponsibilities($job, CvJob $cvJob, array $cvJobs): array
    {
        foreach ($job['job_responsibilities'] as $responsibility) {
            $cvJobResponsibility = new CvJobResponsibility();
            $cvJobResponsibility->fill($responsibility);
            $cvJobResponsibility->job_id = $cvJob->id;
            $cvJobResponsibility->save();
            $cvJobs['job_responsibilities'][] = $cvJobResponsibility;
        }
        return $cvJobs;
    }
}
