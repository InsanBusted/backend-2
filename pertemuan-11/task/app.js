// import express dan routing
import express from "express";
import {router} from "./routes/api.js";


// Membuat object express
const app = express();

// Menggunakan middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Menggunakan routing (router)
app.use('/api', router);

// Mendefinisikan port.
app.listen(3000);
