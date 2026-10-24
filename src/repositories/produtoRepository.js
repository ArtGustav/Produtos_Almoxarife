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
    // TODO: Implementar SQL SELECT * FROM produtos ORDER BY nome
    throw new Error('produtoRepository.listarTodos() ainda não implementado.');
};

// Busca produto por ID (Usado na validação de validade e estoque pelo Grupo 3)
const buscarPorId = async (id) => {
    // TODO: Implementar SQL SELECT * FROM produtos WHERE id = $1
    throw new Error('produtoRepository.buscarPorId() ainda não implementado.');
};

// Atualiza a quantidade do estoque após a baixa/retirada
const atualizarEstoque = async (id, novaQuantidade) => {

    throw new Error('produtoRepository.atualizarEstoque() ainda não implementado.');
};

const atualizar = async (id, nome, descricao, quantidade_estoque, data_validade) => {
    const sql = 'UPDATE produtos SET nome = $1, descricao = $2, quantidade_estoque = $3, data_validade = $4 WHERE id = $5 RETURNING *';
    const valores = [nome, descricao, quantidade_estoque, data_validade, id];
    const resultado = await pool.query(sql, valores);

    return resultado.rows[0];
};

module.exports = { 
    atualizar
 };