<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;


class PostRequest extends FormRequest
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
            'title' => 'required\max:20',
            'category' => 'required\max:20',
            'content' => 'required\max:300'
        ];
    }

    public function attributes()
    {
        return [
            'title' => 'タイトル',
            'category' => 'カテゴリー',
            'content' => '内容'
        ];
    }
}
