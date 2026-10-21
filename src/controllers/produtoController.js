const produtoRepository = require('../repositories/produtoRepository');

/**
 * GRUPO 2: CONTROLADOR DE PRODUTOS
 */
const criarProduto = async (req, res) => {
    // TODO: Validar e cadastrar produto com nome, descricao, quantidade_estoque e data_validade
    res.status(501).json({ mensagem: 'produtoController.criarProduto ainda não implementado.' });
};

const listarProdutos = async (req, res) => {
    try{
        const produtos = await produtoRepository.listarTodos();
        return res.status(200).json(produtos);
    }catch (error) {
        console.error(error.message);
        return res.status(500).json({
            mensagem:"Erro interno"
        });
    };
};

const listarProdutosPorID = async (req, res) => {
    try{
        const id = req.params.id;

        if (isNaN(id) || id <= 0) {
            return res.status(400).json({
                mensagem: "Insira um id valido"
            });
        };

        const produtos = await produtoRepository.buscarPorId(id);

        if (!produtos) {
            res.status(404).json({
                mensagem: "Produto não encontrado"
            });
        };

        return res.status(200).json(produtos)
    }catch (error) {
        console.error(error.message);
        return res.status(500).json({
            mensagem:"Erro interno"
        });
    };
}

const atualizarProduto = async (req, res) => {
    // TODO: Atualizar dados do produto
    res.status(501).json({ mensagem: 'produtoController.atualizarProduto ainda não implementado.' });
};

module.exports = { criarProduto, listarProdutos, atualizarProduto, listarProdutosPorID };