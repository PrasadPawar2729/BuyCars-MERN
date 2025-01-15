const express = require('express');
const { addCar, getCars, deleteCars, updateCar } = require('../controllers/carController');
const authMiddleware = require('../Middleware/authMiddleware');
const router = express.Router();

router.use(authMiddleware);

router.post('/', addCar);
router.get('/', getCars);
router.delete('/', deleteCars);
router.put('/:id', updateCar);

module.exports = router;
