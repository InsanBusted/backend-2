<?php

namespace App\Http\Controllers;

use App\Models\StudentModel;
use Illuminate\Http\Request;


class StudentController extends Controller
{

    public function index() {
        $students = StudentModel::all();
    
        $response = [
            "message"=> "Success Showing All Students Data",
            "data"=> $students,
        ];
    
        return response()->json($response, 200);
    }

    public function store(Request $request) {
        $input = [
            "name"=> $request->name,
            "nim"=> $request->nim,
            "email"=> $request->email,
            "majority"=> $request->majority
        ];

        $student = StudentModel::create($input);

        $response = [
            "message"=> "Success Add Students Data",
            "data"=> $student,
        ];
    
        return response()->json($response, 201);

    }

    public function update(Request $request, $id) {
        $student = StudentModel::find($id);

            $student->name = $request->input('name');
            $student->nim = $request->input('nim');
            $student->email = $request->input('email');
            $student->majority = $request->input('majority');

            $student->save();

        $response = [
            "message"=> "Success Edit Students Data",
            "data"=> $student,
        ];
    
        return response()->json($response, 202);
    }

    public function delete($id) {
        $student = StudentModel::find($id);

            $student->delete();

        $response = [
            "message"=> "Success  Students Data",
            "data"=> $student,
        ];

        return response()->json($response,200);
    }
}
