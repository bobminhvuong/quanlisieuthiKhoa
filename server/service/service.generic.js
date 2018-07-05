var message = require('./../utils/message');
module.exports = {
    getAll: getAll,
    deleteById: deleteById,
    isDisplayById: isDisplayById,
    create: create
}
function isDisplayById(){
    //chưa làm gì hết
}
function create(request,Model) {
    return new Promise((resolve, reject) => {
      var newData = new Model(request);
      newData.save(function(err, response){
          if(err){
              reject(err);
          }else{
              resolve(response);
          }
      });
    });
    
 }
function getAll(Model) {
    return new Promise((resolve, reject) => {
        Model.find().exec(function (err, response) {
            if (err) {
                reject(err)
            } else {
                resolve(response);
            }
        })
    });
}
function deleteById(id,Model) {
    return new Promise((resolve, reject) => {
        Model.findOne({
            _id: id
        }).exec(function (err, response) {
            if (err) {
                reject({
                    message: err.message
                });
            } else {
                if (!response) {
                    reject({
                        statusCode: message.GENERIC.NOT_FOUND,
                        message: message.GENERIC.NOT_FOUND
                    })
                } else {
                    Model.remove({
                        _id: request.id
                    }).exec(function (err, response) {
                        if (err) {
                            reject({
                                message: err.message
                            });
                        } else {
                            resolve({
                                statusCode: message.GENERIC.DELETED,
                                message: message.GENERIC.DELETED
                            });
                        }
                    });
                }
            }
        });
    });
}
