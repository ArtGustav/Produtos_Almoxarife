const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');
// const authMiddleware = require('../middlewares/authMiddleware');
// const roleMiddleware = require('../middlewares/roleMiddleware');

router.get('/', produtoController.listarProdutos);
router.post('/', produtoController.criarProduto); // <-- Aberto para teste livre
router.put('/:id', produtoController.atualizarProduto);

module.exports = router;