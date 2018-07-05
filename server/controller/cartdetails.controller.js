var genericService = require('./../service/generic.service');
var cartDetailController = require('./../service/cartdetais.service');
module.exports = {
    getAllCartDetail: getAllCartDetail,
    createCartDetail: createCartDetail,
    updateCartDetail: updateCartDetail,
    getCartDetailById: getCartDetailById,
    deleteCartDetailById: deleteCartDetailById
}
var Model = 'cartdetails'
function getAllCartDetail(req, res) {
    if (req.query) {
        genericService.getAllByValue(req.query, Model).then((Response) => {
            res.send(Response);
        }).catch((err) => {
            res.send(err);
        })
    } else {
        genericService.getAll(Model).then((Response) => {
            res.send(Response);
        }).catch((err) => {
            res.send(err);
        })
    }
}
function getCartDetailById(req, res) {
    genericService.getById(req.id, Model).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    })
}
function deleteCartDetailById(req, res) {
    genericService.deleteById(req.id, Model).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    })
}
function createCartDetail(req, res) {
    cartDetailController.createCartDetails(req.body).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    });
}
function updateCartDetail(req, res) {
    cartDetailController.createCartDetails(req.params.id, req.body).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    });
}