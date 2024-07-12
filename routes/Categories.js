import express from "express";
const router = express.Router();

import { categoryController } from "../controllers/index.js";

router.get("/", categoryController.getAllCategory);
router.post("/", categoryController.createCategory);
router.patch("/:id", categoryController.editCategory);
router.delete("/:id", categoryController.deleteCategory);

export default router;
