const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');
const pool = require('../conexao');

const verificarLogin = async (req, res, next) => {
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({ mensagem: 'Para acessar este recurso um token de autenticação válido deve ser enviado.' })
    }

    const token = authorization.split(' ')[1]

    try {
        const { id } = jwt.verify(token, jwtSecret)

        const { rows, rowCount } = await pool.query('select * from usuarios where id = $1', [id])

        if (rowCount === 0) {
            return res.status(401).json({ mensagem: 'Não autorizado' })
        }

        const { senha, ...usuario } = rows[0]

        req.usuario = usuario

        next()
    } catch (error) {
        return res.status(401).json({ mensagem: 'Não autorizado' })
    }
}

module.exports = verificarLogin