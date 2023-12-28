const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin.js');
const router =  express.Router();

router.post('/api/add-book',adminController.postAddBook)
router.delete('/api/delete-book/:id',adminController.deleteDeleteBook)
router.put('/api/update-book/:id',adminController.putUpdateBook)
module.exports = router;