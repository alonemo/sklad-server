import express from "express";
const router = express.Router();

import { positionController } from "../controllers/index.js";

router.get("/", positionController.getAllPositions);
router.get("/:id", positionController.getPositionById);
router.post("/", positionController.createPosition);
router.delete("/:id", positionController.deletePosition);

export default router;
