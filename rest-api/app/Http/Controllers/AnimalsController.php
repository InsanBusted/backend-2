<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalsController extends Controller
{
    private $animals = ['ikan', 'singa'];

    public function index()
    {
        return response()->json([
            'status' => 'success',
            'data' => $this->animals,
            'message' => 'Menampilkan data hewan'
        ], 200);
    }

    public function store(Request $request)
    {
        $namaHewan = $request->input('nama');
        $this->animals[] = $namaHewan;

        return response()->json([
            'status' => 'success',
            'data' => $this->animals,
            'message' => 'Menambahkan hewan baru'
        ], 201); 
    }

    public function update(Request $request, $id)
    {
        $namaHewan = $request->input('nama');

        if (isset($this->animals[$id])) {
            $this->animals[$id] = $namaHewan;

            return response()->json([
                'status' => 'success',
                'data' => $this->animals,
                'message' => "Mengupdate data hewan id {$id}"
            ], 200); 
        } else {
            return response()->json([
                'status' => 'error',
                'message' => 'Data hewan tidak ada'
            ], 404);
        }
    }

    public function destroy($id)
    {
        if (isset($this->animals[$id])) {
            unset($this->animals[$id]);

            return response()->json([
                'status' => 'success',
                'data' => $this->animals,
                'message' => "Menghapus data hewan id {$id}"
            ], 200); 
        } else {
            return response()->json([
                'status' => 'error',
                'message' => 'Data hewan tidak ditemukan'
            ], 404); 
        }
    }
}
