const express = require("express");
const router = express.Router();
const { createNote, getAllNotes, getOneNote  } = require("../controllers/noteController");

router.post("/notes", createNote);//API Endpoint
router.get("/notes", getAllNotes);
router.get("/notes/:id", getOneNote);

module.exports = router;
