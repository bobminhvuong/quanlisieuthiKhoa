var connection = require('./../db/index');
module.exports = {
    createCompany:createCompany,
    updateCompany:updateCompany,
}
function createCompany(req) {
    return new Promise((resolve, reject) => {
        var records = [null, req.name, req.logo,req.address, req.phone, new Date()]
        connection.query("INSERT INTO Companys (id,name, logo,address,phone,createAt) VALUES (?)", [records], function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    })
}
function updateCompany(id, req) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM Companys WHERE id='+id,function(err,response){
            if(err){
                reject(err);
            }else{
                if(response){
                    var NewData={
                        name: req.name || response[0].name,
                        logo: req.logo || response[0].logo,
                        address: req.address || response[0].address
                    }
                    connection.query('UPDATE `carts` SET `name`="' + NewData.name + '", `logo`="' + NewData.logo + '",`address`="' + NewData.address +'" WHERE id=' + id, function (err, result) {
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