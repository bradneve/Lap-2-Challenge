const express = require('express');
const router = express.Router();
const booksController = require('../controllers/posts')

router.get('/:id', booksController.show)
router.post('/', booksController.create)

module.exports = router;