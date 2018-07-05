var jwt = require('./../utils/jwt');
var connection = require('./../db/index');
var message =require('./../utils/message');
module.exports = {
    login:login,
    getUserByToken:getUserByToken,
    getUserByEmail:getUserByEmail
}
function getUserByEmail(email){
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM user WHERE email='+email,function(err, response){
            if(err){
                reject(err)
            }else{
                if(response.length == 0){
                    reject({
                        statusCode:message.ERROR_MESSAGE.AUTH.NOT_AUTHORIZED,
                        message: message.ERROR_MESSAGE.AUTH.NOT_AUTHORIZED
                    });
                }else{
                    resolve(response[0])
                }
            }
        });
    });
    
}
function getUserByToken(token){
    return new Promise((resolve, reject) => {
        if(token){
            jwt.verify(token, function(err,decodeData){
                if(err){
                    reject(err);
                }else{
                    var email=decodeData.email;
                    connection.query('SELECT * FROM user WHERE email='+email,function(err,response){
                        if(err){
                            reject(err);
                        }else{
                            resolve(convertUserModelToUserResponse(response[0]));
                        }
                    })
                }
            })
        }
    });
}
function login(req){
    return new Promise((resolve, reject) => {
        connection.query('SELECT * from admin where admin.email_admin="' + req.email + '" and admin.matkhau="' + req.password + '"', function (err, response) {
            if (err) {
                reject(err)
            } else {
                if (response.length == 0) {
                    reject({
                        message: "sai mật khẩu tài khoản"
                    });
                }else{
                    jwt.sign(JSON.stringify(response),function(err, token){
                        if(err){
                            reject(err);
                        }else{
                            resolve(token)
                        }
                    })
                }
            }
        })
    })
    
}
function convertUserModelToUserResponse(userModel) {
    var userObj = userModel.toObject();
    delete userObj.password;
    delete userObj.salt;
    return userObj;
}