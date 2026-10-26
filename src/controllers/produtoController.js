const produtoRepository = require('../repositories/produtoRepository');

/**
 * GRUPO 2: CONTROLADOR DE PRODUTOS
 */
const criarProduto = async (req, res) => {
    try{
        const {nome,descricao,quantidade_estoque,data_validade} = req.body;
        //validação de campos obrigatórios
        if (!nome || quantidade_estoque === undefined || !data_validade) {
            return res.status(400).json({
                mensagem:'Os campos nome, quantidade_estoque e data_validade são obrigatoórios mocinho huumf'
            });
        }
        //validção de regra: estoque não pode estár negativo/devendo!!!!
        if (quantidade_estoque <0){
            return res.status(400).json({
                mensagem: 'O Valor não pode ser negativo, vai dever pro seu banco'
            })
        }
        const produtoCriado = await produtoRepository.criar(
            nome,
            descricao || null,
            quantidade_estoque,
            data_validade
        );
        return res.status(201).json(produtoCriado);
    } catch (error){
        console.error('Erro ao criar produto:',error);
        return res.status(500).json({mensagem:'Erro interno no servidor.'})
    }
};

const listarProdutos = async (req, res) => {
    // TODO: Listar produtos do estoque
    res.status(501).json({ mensagem: 'produtoController.listarProdutos ainda não implementado.' });
};

const atualizarProduto = async (req, res) => {
    // TODO: Atualizar dados do produto
    res.status(501).json({ mensagem: 'produtoController.atualizarProduto ainda não implementado.' });
};

module.exports = { criarProduto, listarProdutos, atualizarProduto };