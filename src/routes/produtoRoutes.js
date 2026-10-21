const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.get('/', authMiddleware, produtoController.listarProdutos);
router.post('/', authMiddleware, roleMiddleware('admin', 'SuperAdmin'), produtoController.criarProduto);
router.put('/:id', authMiddleware, roleMiddleware('admin', 'SuperAdmin'), produtoController.atualizarProduto);
// Exclusão permitida somente a cargos administrativos autenticados.
router.delete('/:id', authMiddleware, roleMiddleware(['admin', 'SuperAdmin']), produtoController.deletarProduto);

module.exports = router;
