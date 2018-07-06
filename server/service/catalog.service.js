var connection = require('./../db/index');
module.exports = {

    createCatalog:createCatalog,
    updateCatalog:updateCatalog,
}

function createCatalog(req) {
    console.log(req);
    return new Promise((resolve, reject) => {
        var records = [null, req.name,req.userCreate,new Date(), new Date()]
        connection.query("INSERT INTO catalogs(id,name,userCreate,createAt,updateAt) VALUES (?)", [records], function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    })
}

function updateCatalog(id, req) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM catalogs WHERE id='+id,function(err,response){
            if(err){
                reject(err);
            }else{
                if(response){
                    var NewData={
                        name: req.name || response[0].name,
                    }
                    connection.query('UPDATE `carts` SET `totalPrice`="' + NewData.name+'" WHERE id=' + id, function (err, result) {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
                }
            }
        })
       
    })
}