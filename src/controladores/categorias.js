const pool = require('../conexao')

const listarCategorias = async (req, res) => {
    try {
        const {rows: categorias} = await pool.query('select id, descricao from categorias  where descricao = $1', [req.usuarios])

        for (const categoria of categorias) {
            categoria.descricao = categoria.descricao.split(', ')
            categoria.usuarios = req.usuarios.nome
        }
    

        return res.json(categorias)
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' })
    }
}

module.exports = listarCategorias