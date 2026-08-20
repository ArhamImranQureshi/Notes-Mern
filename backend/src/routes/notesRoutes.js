import express from "express";
import { getNotes, postNotes, updateNotes, deleteNotes } from "../controllers/notesController.js";
const router = express.Router();

router.get("/",getNotes);
router.post("/",postNotes);
router.put("/:id",updateNotes);
router.delete("/:id",deleteNotes);

export default router;