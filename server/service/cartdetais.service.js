var connection = require('./../db/index');
module.exports = {
    createCartDetails:createCartDetails,
    updateCartDetails:updateCartDetails,
}

function createCartDetails(req) {
    return new Promise((resolve, reject) => {
        var records = [null, req.idProduct, req.price, req.quantitys, req.totalPrice, req.idCart]
        connection.query("INSERT INTO carts(id,idProduct, price,quantitys,totalPrice,idCart) VALUES (?)", [records], function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    })
}

function updateCartDetails(id, req) {

    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM carts WHERE id='+id,function(err,response){
            console.log(response[0].id);
            
            if(err){
                reject(err);
            }else{
                if(response){
                    var NewData={
                        idProduct: req.idProduct || response[0].totalPrice,
                        price: req.price || response[0].userCreate,
                        totalPrice: req.totalPrice || response[0].idstatistics,
                        idCart: req.idCart

                    }
                    connection.query('UPDATE `carts` SET `totalPrice`=' + NewData.totalPrice + ', `userCreate`=' + NewData.userCreate + ',`updateAt`=' + NewData.updateAt + ',`idstatistics`=' + NewData.idstatistics + ' WHERE id=' + id, function (err, result) {
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
