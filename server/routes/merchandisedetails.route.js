var router = require('express').Router();
var marchandiseDetailController = require('./../controller/merchandisedetail.controller');
module.exports = function () {
    router.get('/', marchandiseDetailController.getAllMerchandiseDetail);
    router.get('/:id', marchandiseDetailController.getMerchandiseDetailById);
    router.put('/:id', marchandiseDetailController.updateMerchandiseDetail);
    router.delete('/:id', marchandiseDetailController.deleteMerchandiseDetailById);
    router.post('/', marchandiseDetailController.createMerchandiseDetail);
    return router;
}