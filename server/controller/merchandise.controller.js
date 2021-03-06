var genericService = require('./../service/generic.service');
var merchandiseController = require('./../service/merchandise.service');
module.exports = {
    getAllMerchandise: getAllMerchandise,
    createMerchandise: createMerchandise,
    updateMerchandise: updateMerchandise,
    getMerchandiseById: getMerchandiseById,
    deleteMerchandiseById: deleteMerchandiseById
}
var Model = 'merchandises'
function getAllMerchandise(req, res) {
    if(Object.keys(req.query).length>0){
        genericService.getAllByValue(req.query,Model).then((Response) => {
            res.send(Response);
        }).catch((err) => {
            res.send(err);
        })
    }else{
        genericService.getAll(Model).then((Response) => {
            res.send(Response);
        }).catch((err) => {
            res.send(err);
        })
    }
}
function getMerchandiseById(req, res) {
    genericService.getById(req.id, Model).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    })
}
function deleteMerchandiseById(req, res) {
    genericService.deleteById(req.id, Model).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    })
}
function createMerchandise(req,res) {
    merchandiseController.createMerchandise(req.body).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    })
}
function updateMerchandise(req,res) {
    merchandiseController.updateMerchandise(req.body).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    })
}