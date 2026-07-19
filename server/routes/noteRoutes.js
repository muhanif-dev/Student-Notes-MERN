const express = require("express");
const router = express.Router();
const { createNote, getAllNotes, getOneNote, updateNote } = require("../controllers/noteController");

router.post("/notes", createNote);//API Endpoint
router.get("/notes", getAllNotes);
router.get("/notes/:id", getOneNote);
router.put("/notes/:id", updateNote);

module.exports = router;
