var userService = require('./../service/user.service');
var User = require('./../service/generic.service');
var genericService= require('./../service/generic.service');
var crypto = require('./../utils/crypto');
var message = require('./../utils/message');
var jwt = require('./../utils/jwt');
module.exports = {
    createUser: createUser,
    getAllUser: getAllUser,
    getUserById: getUserById,
    updateUser: updateUser,
    deleteUser: deleteUser,
    uploadAvatar: uploadAvatar,
    getUserByEmail: getUserByEmail
}
function getUserByEmail(req, res) {
    var email = req.params.email;
    userService.getUserByEmail(email)
        .then(function (response) {
            res.send(response);
        })
        .catch(function (err) {
            res.send(err);
        });
};
function uploadAvatar(req, res) {
    var id = req.params.id;
    console.log(id);
    
    if (!req.files)
        res.send({
            message: 'No files were uploaded.'
        });
    let uploadedFile = req.files.file;
    userService.uploadAvatar(id, uploadedFile)
        .then(function (avatar) {
            res.send({
                avatar: avatar
            })
        })
        .catch(function (err) {
            res.send(err);
        });
}
function deleteUser(req, res) {
    genericService.deleteById(req.params.id,User).then(function (response) {
        res.send(response)
    }).catch(function (err) {
        res.send(err)
    });
}

function updateUser(req, res) {
    var request = {
        id: req.params.id,
        name: req.body.name
    };
    userService.updateUser(request).then(function (response) {
        res.send(response)
    }).catch(function (err) {
        res.send(err)
    });
}
function getUserById(req, res) {
    genericService.getbyID(req.params.id,User).then(function (response) {
        res.send(response)
    }).catch(function (err) {
        res.send(err)
    });
}
function getAllUser(req, res) {
    genericService.getAll(User).then(function (response) {
        res.send(response);
    }).catch(function (err) {
        res.send(err)
    })
}
function createUser(req, res) {
    var salt = crypto.genSalt();
    var request = {
        name: req.body.name,
        email: req.body.email,
        salt: salt,
        password: crypto.hashWithSalt(req.body.password, salt),
        gender: req.body.gender,
        birtdate: req.body.birtdate,
        updateAt: new Date(),
        createdAt: new Date()
    };
    genericService.create(request,User).then(function (response) {
        res.send(response)
    }).catch(function (err) {
        res.send(err)
    });
}