var router = require('express').Router();
var imageController = require('./../controller/image.controller');
module.exports = function () {
    router.get('/', imageController.getAllImg);
    router.get('/:id', imageController.getImgById);
    router.put('/:id', imageController.updateImg);
    router.delete('/:id', imageController.deleteImgById);
    router.post('/', imageController.createImg);
    return router;
}