// import StudentController
import express from "express";
import StudentController from "../controllers/StudentController.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to Student API");
});

// student routes
router.get("/students", StudentController.index);
router.get("/students/:id", StudentController.show);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);

// export router
export default router;
