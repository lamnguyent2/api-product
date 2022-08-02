const express = require('express');
const router = express.Router();
const ProductsController = require('../app/controllers/ProductsController');

router.get('/', ProductsController.ShowAllProducts);
router.get('/trash', ProductsController.ShowTrashProduct);
router.get('/:slug', ProductsController.ShowProductBySlug);
router.get('/product/:id', ProductsController.ShowProductById);
router.post('/add', ProductsController.AddProduct);
router.put('/:id/edit', ProductsController.EditProduct);
router.delete('/:id/delete', ProductsController.DeleteProduct);
router.delete('/:id/delete-force', ProductsController.ForceDeleteProduct);
router.patch('/:id/restore', ProductsController.RestoreProduct);

module.exports = router;