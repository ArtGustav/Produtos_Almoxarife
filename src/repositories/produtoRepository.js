const pool = require('../config/db');

/**
 * GRUPO 2: PRODUTOS
 */

// Cadastra um novo produto com data de validade
const criar = async (nome, descricao, quantidade_estoque, data_validade) => {
    // TODO: Implementar SQL INSERT INTO produtos (nome, descricao, quantidade_estoque, data_validade) ... RETURNING *
    throw new Error('produtoRepository.criar() ainda não implementado.');
};

// Lista todos os produtos
const listarTodos = async () => {
    const sql = 'SELECT * FROM produtos ORDER BY id ASC'
    const resultado = await pool.query(sql);

    return resultado.rows;
};

// Busca produto por ID (Usado na validação de validade e estoque pelo Grupo 3)
const buscarPorId = async (id) => {
    const sql = 'SELECT * FROM produtos WHERE id = $1'
    const resultado = await pool.query(sql, [id]);

    return resultado.rows[0];
};

// Atualiza a quantidade do estoque após a baixa/retirada
const atualizarEstoque = async (id, novaQuantidade) => {
    // TODO: Implementar SQL UPDATE produtos SET quantidade_estoque = $1 WHERE id = $2 RETURNING *
    throw new Error('produtoRepository.atualizarEstoque() ainda não implementado.');
};

module.exports = { criar, listarTodos, buscarPorId, atualizarEstoque };