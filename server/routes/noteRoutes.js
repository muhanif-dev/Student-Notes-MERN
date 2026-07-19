const express = require("express");
const router = express.Router();
const { createNote, getAllNotes, getOneNote, updateNote, deleteNote } = require("../controllers/noteController");

router.post("/notes", createNote);//API Endpoint
router.get("/notes", getAllNotes);
router.get("/notes/:id", getOneNote);
router.put("/notes/:id", updateNote);
router.delete("/notes/:id", deleteNote);

module.exports = router;
