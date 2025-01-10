// import express and router
import express from "express";
import router from "./routes/api.js";

// buat object express
const app = express();

// menggunakan middleware
app.use(express.json());

// menggunakan router
app.use(router);

// mendefinisikan port
app.listen(3000);