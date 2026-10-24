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
    try{
        const id = req.params.id;
    
        if (isNaN(id) || id <= 0) {
            return res.status(400).json({
                mensagem:"Insira um id valido"
            });
        };
    
        const {nome, descricao, quantidade_estoque, data_validade} = req.body;
    
        if (!nome || !descricao || isNaN(quantidade_estoque) || !data_validade) {
            return res.status(400).json({
                mensagem:"Todos os campos devem ser preenchidos"
            });
        };
    
        const produto = await produtoRepository.atualizar(id, nome, descricao, quantidade_estoque, data_validade);
    
        if (produto.rowCount === 0) {
            return res.status(404).json({
                mensagem:"Produto não encontrado"
            });
        };
    
        return res.status(200).json({
            mensagem:"Produto atualizado",
            produto:produto
        })

    }catch (error) {
        console.error(error.message);
        return res.status(500).json({
            mensagem:"Erro interno"
        });
    };
};

module.exports = { criarProduto, listarProdutos, atualizarProduto };