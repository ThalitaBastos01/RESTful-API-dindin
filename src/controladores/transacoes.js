const pool = require('../conexao')
const bcrypt = require('bcrypt')

const cadastrarTransacao = async (req, res) => {
    const {descricao, valor, data, categoria_id, tipo} = req.body

    if (!descricao || !valor || !data || !categoria_id || !tipo) {
        return res.status(400).json({mensagem: 'Todos os campos obrigatorios devem ser informados.'})
    }

    try {
        
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' })
    }
}