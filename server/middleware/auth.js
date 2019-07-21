let jwt = require('jsonwebtoken');
const {findByUsername} = require("../models/User");
const CryptoJS = require('crypto-js');

let checkToken = (req, res, next) => {
    let token = req.headers['authorization'] || req.headers['access-token'] || req.body.accessToken || req.params.accessToken || req.query.accessToken;

    if (token && token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
        jwt.verify(token, process.env.SECRET_JWT, async (err, decoded) => {
            if (err || !(decoded)) {
                return res.status(401).json({
                    status: -2,
                    success: false,
                    message: 'توکن معتبر نمی باشد'
                });

            }//Refresh Token
            else if ((parseInt(decoded.exp) - parseInt(process.env.REFRESH_TOKEN_TIME)) < parseInt((new Date().getTime() / 1000).toFixed(0))) {
                //RefreshToken And Send NewToken in header 'NewToken'
                let token = await jwt.sign({user: decoded.user},
                    process.env.SECRET_JWT,

                    {expiresIn: process.env.TOKEN_EXPIRES_IN}
                );
                res.header("newToken", token);
                req.user=decoded.user
                next()
            } else {
                req.user=decoded.user
                next()
            }
        });
    } else {
        res.status(401);
        return res.json({
            status: -2,
            message: 'توکن پشتیبانی نمی شود'
        });
    }
};

let getToken = async function (username, password) {
    return await findByUsername(username).then(async user => {
        if (user) {
            let decryptP = CryptoJS.AES.decrypt(user.password, process.env.SECRET_JWT).toString(CryptoJS.enc.Utf8);
            if (password == decryptP) {
                let token = await jwt.sign({user: user},
                    process.env.SECRET_JWT,

                    {expiresIn: process.env.TOKEN_EXPIRES_IN}
                );
// return the JWT token for the future API calls
                return ({
                    status: 1,
                    msg: 'Authentication successful!',
                    token: token
                });
            } else {
                return {
                    status: -1,
                    msg: "رمز عبور یا نام کاربری اشتباه است"
                }
            }
        } else {
            return {
                status: -1,
                msg: "رمز عبور یا نام کاربری اشتباه است"
            };
        }

    }).catch(err => {
        return err;
    });
}
let hasRole=function (roles){
    return function(req, res, next) {
        for(let i=0;i<roles.length;i++){
            if (req.user.role === roles[i]) {
                next();
                break;
            }
        }
        res.status(401).json({message:"شما مجوز دسترسی به این بخش را ندارید"})

    }
}
module.exports = {
    checkToken: checkToken,
    getToken: getToken,
    hasRole: hasRole
}
