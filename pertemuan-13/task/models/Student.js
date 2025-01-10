// import database
import db from "../config/database.js";

// membuat class Model Student
class Student {
  /**
   * Membuat method static all.
   */
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      /**
       * Melakukan query menggunakan method query.
       * Menerima 2 params: query dan callback
       */
      const sql = "SELECT * FROM students";
      db.query(sql, (err, results) => {
        if (err) {
          //jika error reject
          reject(err);
        } else {
          //jika berhasil resolve
          resolve(results);
        }
      });
    });
  }

  // menampilkan student berdasarkan id
  static find(id) {
    // method untuk menampilkan data berdasarkan id
    return new Promise((resolve, reject) => {
      // lakukan query ke db untuk ambil data berdasarkan id
      const sql = `SELECT * FROM students WHERE id = ?`;
      db.query(sql, id, (err, results) => {
        if (err) {
          //jika error reject
          reject(err);
        } else {
          //jika berhasil resolve
          resolve(results[0]);
        }
      });
    });
  }

  /**
   * TODO 1: Buat fungsi untuk insert data.
   * Method menerima parameter data yang akan diinsert.
   * Method mengembalikan data student yang baru diinsert.
   */
  static async create(body) {
    try {
      const SQL = `INSERT INTO students (nama, nim, email, jurusan) VALUES (?, ?, ?, ?)`;
  
      // Menggunakan db.query dengan query parameter untuk mencegah SQL Injection
      const id = await new Promise((resolve, reject) => {
        db.query(SQL, [body.nama, body.nim, body.email, body.jurusan], (err, result) => {
          if (err) {
            reject(err); // Jika ada error, reject promise
          } else {
            resolve(result.insertId); // Jika sukses, resolve dengan hasil
          }
        });
      });

      const createdStudent = await this.find(id);

      return createdStudent;
    } catch (error) {
      throw new Error(error); // Menangkap error jika ada masalah dalam proses async
    }
  }

   // method untuk mengupdate data
   static async update(id, data) {
    try {
      // await untuk menunggu hasil dari pemanggilan query update data student
      await new Promise((resolve, reject) => {
        const sql = "UPDATE students SET ? WHERE id = ?";
        db.query(sql, [data, id], (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
      });

      // Setelah berhasil update, panggil method find untuk mengambil data yang baru diupdate
      const updatedStudent = await this.find(id);

      return updatedStudent;
    } catch (err) {
      throw err; // Menangani error jika terjadi
    }
  }

  // method untuk menghapus data
  static async delete(id) {
    return new Promise((resolve, reject) => {
      // lakukan query ke db untuk ambil data berdasarkan id
      const sql = "DELETE FROM students WHERE id = ?";
      // jalankan query dan kirimkan id sebagai parameter query
      db.query(sql, id, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  
}

export default Student;
