// import Model Student
import Student from "./../models/Student.js";

class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await.
    try {
      // await untuk menunggu hasil dari pemanggilan method all() pada model student
      const students = await Student.all();
      const data = {
        message: "Menampilkan data student",
        data: students,
      };
      res.status(200).json(data);
    } catch (err) {
      // catch untuk menangkap error
      const data = {
        message: "Terjadi kesalahan",
        error: err.message,
      };
      res.status(500).json(data);
    }
  }

  async show(req, res) {
    const { id } = req.params;
    try {
      const student = await Student.find(id);
      const data = {
        message: `Menampilkan data student dengan id ${id}`,
        data: student,
      };
      return res.status(200).json(data);
    } catch (err) {
      // catch untuk menangkap error
      const data = {
        message: "Terjadi kesalahan",
        error: err.message,
      };
      res.status(500).json(data);
    }
  }

  async store(req, res) {
    /**
     * TODO 2: memanggil method create.
     * Method create mengembalikan data yang baru diinsert.
     * Mengembalikan response dalam bentuk json.
     */
    // code here
    const body = req.body;
    try {
      // await untuk menunggu hasil dari pemanggilan method create() pada model student
      const student = await Student.create(body);

      const response = {
        message: "Data berhasil ditambahkan",
        data: student,
      };

      return res.status(201).json(response);
    } catch (err) {
      const response = {
        message: "Terjadi kesalahan",
        error: err.message,
      };
      res.status(500).json(response);
    }
  }

  // method update untuk mengubah data student
  async update(req, res) {
    // ambil id dari parameter
    const { id } = req.params;
    // ambil data dari body
    const data = req.body;

    try {
      // await untuk menunggu hasil dari pemanggilan method update() pada model student
      const student = await Student.update(id, data);

      const response = {
        message: "Data berhasil diubah",
        data: student,
      };

      return res.status(200).json(response);
    } catch (err) {
      const response = {
        message: "Terjadi kesalahan",
        error: err.message,
      };
      res.status(500).json(response);
    }
  }

  // method destroy untuk menghapus data student
  async destroy(req, res) {
    // ambil id dari parameter
    const { id } = req.params;

    try {
      // await untuk menunggu hasil dari pemanggilan method destroy() pada model student
      await Student.delete(id);

      const response = {
        message: "Data berhasil dihapus",
      };

      return res.status(200).json(response);
    } catch (err) {
      const response = {
        message: "Terjadi kesalahan",
        error: err.message,
      };
      res.status(500).json(response);
    }
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
export default object;
