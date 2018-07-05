var message = require('./../utils/message');
var connection = require('./../db/index');
module.exports = {
    getAll: getAll,
    deleteById: deleteById,
    getById: getById
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
        connection.query('SELECT * FROM '+Model+' WHERE id=' + id, function (err, response) {
            if (err) {
                reject(err)
            } else {
                resolve(response);
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