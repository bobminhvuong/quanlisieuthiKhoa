var genericService = require('./../service/generic.service');
var merchandiseDetailsController = require('./../service/merchandisedetail.service')
module.exports = {
    getAllMerchandiseDetail: getAllMerchandiseDetail,
    createMerchandiseDetail: createMerchandiseDetail,
    updateMerchandiseDetail: updateMerchandiseDetail,
    getMerchandiseDetailById: getMerchandiseDetailById,
    deleteMerchandiseDetailById: deleteMerchandiseDetailById
}
var Model = 'merchandisedetails'
function getAllMerchandiseDetail(req, res) {
    genericService.getAll(Model).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    });
}
function getMerchandiseDetailById(req, res) {
    genericService.getById(req.id, Model).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    });
}
function deleteMerchandiseDetailById(req, res) {
    genericService.deleteById(req.id, Model).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    });
}
function createMerchandiseDetail(req,res) {
    merchandiseDetailsController.createMerchandisedetail(req.body).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    });
}
function updateMerchandiseDetail() {
    merchandiseDetailsController.updateMerchandisedetail(req.body).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    });
}