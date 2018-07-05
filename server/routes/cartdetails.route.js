var router = require('express').Router();
var cartDetailController = require('./../controller/cartdetails.controller');
module.exports = function () {
    router.get('/', cartDetailController.getAllCartDetail);
    router.get('/:id', cartDetailController.getCartDetailById);
    router.put('/:id', cartDetailController.updateCartDetail);
    router.delete('/:id', cartDetailController.deleteCartDetailById);
    router.post('/', cartDetailController.createCartDetail);
    return router;
}