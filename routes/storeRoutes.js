const path = require('path');

const express = require('express');

const bookStoreController = require('../controllers/bookStore');

const router =  express.Router();


router.get('/api',bookStoreController.getBooks)
router.get('/api/book/:id',bookStoreController.getBookDetails)


module.exports = router;
