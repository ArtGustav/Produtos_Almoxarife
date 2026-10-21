const produtoRepository = require('../repositories/produtoRepository');

/**
 * GRUPO 2: CONTROLADOR DE PRODUTOS
 */
const criarProduto = async (req, res) => {
    // TODO: Validar e cadastrar produto com nome, descricao, quantidade_estoque e data_validade
    res.status(501).json({ mensagem: 'produtoController.criarProduto ainda não implementado.' });
};

const listarProdutos = async (req, res) => {
    // TODO: Listar produtos do estoque
    res.status(501).json({ mensagem: 'produtoController.listarProdutos ainda não implementado.' });
};

const atualizarProduto = async (req, res) => {
    // TODO: Atualizar dados do produto
    res.status(501).json({ mensagem: 'produtoController.atualizarProduto ainda não implementado.' });
};

// A FK solicitacoes.produto_id impede excluir itens vinculados (PG 23503).
const deletarProduto = async (req, res) => {
    const { id } = req.params;
    if (!/^\d+$/.test(id) || Number(id) < 1) {
        return res.status(400).json({ mensagem: 'ID do produto inválido.' });
    }
    try {
        const produto = await produtoRepository.deletar(id);
        if (!produto) return res.status(404).json({ mensagem: 'Produto não encontrado.' });
        return res.status(200).json({ mensagem: 'Produto excluído com sucesso.', produto });
    } catch (erro) {
        if (erro.code === '23503') {
            return res.status(409).json({ mensagem: 'Produto possui solicitações vinculadas e não pode ser excluído.' });
        }
        console.error('Erro ao excluir produto:', erro);
        return res.status(500).json({ mensagem: 'Erro interno ao excluir produto.' });
    }
};

// Exportações nomeadas evitam sobrescrever handlers adicionados pelos colegas.
module.exports = { criarProduto, listarProdutos, atualizarProduto, deletarProduto };
