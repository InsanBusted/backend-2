<?php 
 
class Animal 
{ 
    // Property animals (array) 
    public $animals; 
 
    // Constructor untuk mengisi data awal animals 
    public function __construct() 
    { 
        $this->animals = ['Ayam', 'Ikan']; 
    } 
 
    // Method untuk menampilkan seluruh data animals 
    public function index() 
    { 
        foreach ($this->animals as $index => $animal) { 
            echo ($index + 1) . ". " . $animal . PHP_EOL; 
        } 
    } 
 
    // Method untuk menambahkan hewan baru 
    public function store($animal) 
    { 
        if (is_string($animal)) { 
            array_push($this->animals, $animal); 
        } 
    } 
 
    // Method untuk memperbarui data hewan 
    public function update($index, $newAnimal) 
    { 
        if (isset($this->animals[$index])) { 
            $this->animals[$index] = $newAnimal; 
        } 
    } 
 
    // Method untuk menghapus data hewan 
    public function destroy($index) 
    { 
        if (isset($this->animals[$index])) { 
            array_splice($this->animals, $index, 1); 
        } 
    } 
} 
 
$animal = new Animal(); 
 
// Menampilkan seluruh data animals 
echo 'Index - Menampilkan seluruh data hewan' . PHP_EOL; 
$animal->index(); 
 
echo PHP_EOL; 
 
// Menambahkan hewan baru 
echo 'Store - Menambahkan data hewan baru' . PHP_EOL; 
$animal->store('Burung'); 
$animal->index(); 
 
echo PHP_EOL; 
 
// Memperbarui data hewan 
echo 'Update - Mengupdate data hewan' . PHP_EOL; 
$animal->update(0, 'Kucing Anggora'); 
$animal->index(); 
 
echo PHP_EOL; 
 
// Menghapus data hewan 
echo 'Destroy - Menghapus data hewan' . PHP_EOL; 
$animal->destroy(1); 
$animal->index(); 
 
echo PHP_EOL;
