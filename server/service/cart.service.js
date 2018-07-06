var connection = require('./../db/index');
var genericService = require('./generic.service');
var mesage= require('./../utils/message');
module.exports = {
    createCart: createCart,
    updateCart: updateCart,
}

async function createCart(req) {
    return new Promise((resolve, reject) => {
        var records = [null, req.totalPrice, req.userCreate, new Date(), new Date(), req.idstatistics]
        connection.query("INSERT INTO carts(id,totalPrice, userCreate,createAt,updateAt,idstatistics) VALUES (?)", [records], function (err, result) {
            if (err) {
                reject(err);
            } else {
                if(result.insertId){
                    req.idProduct.forEach(async element => {
                        genericService.getById(element.id,'products').then((response)=>{
                            var records = [null, element.id, response.price, (response.price*element.quantitys), result.insertId]
                            connection.query("INSERT INTO cartdetails(id,idProduct, price,totalPrice,idCart) VALUES (?)", [records],function(err,response){
                                if(err){
                                    reject(err)
                                }else{
                                    resolve(response);
                                }
                            });
                        });
                    });
                }else{
                    reject({
                        statusCode:mesage.STATUS_CODE.ERROR,
                        mesage: mesage.ERROR_MESSAGE.CART.CART_ERROR
                    })
                }
            }
        });
    })
}
function updateCart(id, req) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM carts WHERE id='+id,function(err,response){
            if(err){
                reject(err);
            }else{
                if(response){
                    var NewData={
                        totalPrice: req.totalPrice || response[0].totalPrice,
                        userCreate: req.userCreate || response[0].userCreate,
                        idstatistics: req.idstatistics || response[0].idstatistics,
                    }
                    connection.query('UPDATE `carts` SET `totalPrice`=' + NewData.totalPrice + ', `userCreate`=' + NewData.userCreate + ',`idstatistics`=' + NewData.idstatistics + ' WHERE id=' + id, function (err, result) {
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