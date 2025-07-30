// routes/notesRoutes.js
const express = require('express');
const router = express.Router();
const {createNote, getAllNotes, getNote, deleteNote} = require('../controllers/notesController');

router.post('/', createNote);
router.get('/', getAllNotes);
router.get('/:id', getNote);
router.delete('/:id', deleteNote);

module.exports = router;
