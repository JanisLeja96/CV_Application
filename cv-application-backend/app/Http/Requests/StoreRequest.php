<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'document_name' => 'required|max:48',

            'base_data' => 'required',
                'base_data.summary' => 'required|max:255',
                'base_data.first_name' => 'required|max:36|alpha',
                'base_data.last_name' => 'required|max:36|alpha',
                'base_data.email' => 'required|max:48',
                'base_data.phone_number' => 'required|max:24',

            'address' => 'required',
                'address.country' => 'required|max:255|alpha',
                'address.postal_code' => 'required|max:16',
                'address.city' => 'required|max:255|alpha',
                'address.street' => 'required|max:255',
                'address.house_number' => 'required|max:16',

        ];
    }
}
