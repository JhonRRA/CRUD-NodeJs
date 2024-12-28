const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Acceso denegado: Token no proporcionado' });
    }

    try {
        const decoded = jwt.verify(token, 'SECRET_KEY'); // Reemplaza 'SECRET_KEY' con tu clave secreta
        req.user = decoded;
        next();
    } catch (error) {
        res.status(403).json({ message: 'Token inválido' });
    }
};

module.exports = authenticateToken;
