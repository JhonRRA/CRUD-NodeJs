const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Registro de usuario
exports.register = async (req, res) => {
    const { name, email, password, age } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'El correo ya está registrado' });
        }

        const newUser = new User({ name, email, password, age });
        await newUser.save();

        res.status(201).json({ message: 'Usuario registrado con éxito' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Inicio de sesión
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        const token = jwt.sign({ id: user._id, email: user.email }, 'SECRET_KEY', { expiresIn: '1h' });

        res.json({ token, message: 'Inicio de sesión exitoso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
