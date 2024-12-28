const express = require('express');
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/userController');
const authenticateToken = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authenticateToken, getUsers);
router.get('/:id', authenticateToken, getUserById);
router.post('/', authenticateToken, createUser);
router.put('/:id', authenticateToken, updateUser);
router.delete('/:id', authenticateToken, deleteUser);

module.exports = router;
