var message = require('./../utils/message');
var connection = require('./../db/index');
module.exports = {
    getAll: getAll,
    deleteById: deleteById,
    getById: getById,
    getAllByValue: getAllByValue
}
function getAllByValue(req, Model) {
    console.log(Object.getOwnPropertyNames(req));
    var a = Object.getOwnPropertyNames(req);
    
    var where = "WHERE ";
    if(where != ""){
        for (var i = 1; i <= a.length; i++) {
            if (a.length = 1){
               where = where+a[i-1];
                var b=0;
            }else{
                where = where+a[i-1];
            }
         }
    }
     if(b===0){
     console.log(where);
     }
     
    // return new Promise((resolve, reject) => {
    //   connection.query('SELECT * FROM '+Model+' WHERE'+ '')
    // });
}
function getAll(Model) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM ' + Model, function (err, response) {
            if (err) {
                reject(err)
            } else {
                resolve(response)
            }
        });

    });
}
function getById(id, Model) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM ' + Model + ' WHERE id=' + id, function (err, response) {
            if (err) {
                reject(err)
            } else {
                resolve(response[0]);
            }
        })
    })

}
function deleteById(id, model) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM ' + Model + ' WHERE id=' + id, function (err, response) {
            if (err) {
                reject(err)
            } else {
                if (response) {
                    connection.query('DELETE FROM ' + Model + ' WHERE ' + id, function (err, response) {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(response);
                        }
                    });
                } else {
                    reject({
                        statusCode: message.GENERICSTATUS.NOTFOUND,
                        message: message.GENERIC.NOTFOUND
                    })
                }
            }
        });
    });
}