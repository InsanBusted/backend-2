// TODO 3: Import data students dari folder data/students.js
import {data} from '../data/students.js';
// code here

// Membuat Class StudentController
class StudentController {
  index(req, res) {
    // TODO 4: Tampilkan data students
    // code here
    res.send(data);
  }

  store(req, res) {
    // TODO 5: Tambahkan data students
    // code here
    const addUser = req.body
    
    data.push(addUser)
    res.send(`${data} Tambah Students`);
  }
  
  update(req, res) {
    // TODO 6: Update data students
    const id = req.params.id;
    let updated = false;

    data.forEach((student, index) => {
      if (student.id == id) {
        data[index] = { ...student, ...req.body }; // Update data
        updated = true;
      }
    });

    if (updated) {
      res.send(`Student id ${id} berhasil di update.`);
    } else {
      res.status(404).send(`Student id ${id} tidak ditemukan.`);
    }
  }

  destroy(req, res) {
    // TODO 7: Hapus data students
    const id = req.params.id;
    const initialLength = data.length;

    // Filter data untuk menghapus student berdasarkan id
    const filteredData = data.filter(student => student.id != id);

    if (filteredData.length < initialLength) {
      // Jika ada data yang dihapus
      data.length = 0;
      data.push(...filteredData); // Update data array
      res.send(`Student id ${id} berhasil dihapuss.`);
    } else {
      res.status(404).send(`Student with id ${id} not found.`);
    }
  }
}


// Membuat object StudentController
const studentController = new StudentController();

// Export object StudentController
export default studentController
