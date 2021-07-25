import jwt_decode from 'jwt-decode';
const jwt = require('jsonwebtoken');
const secret = "dad-secret-access-token";
const refreshTokenSecret = "dad-secret-refresh-access-token";

const checkToken = (req, res, next)=>{
    const bearerHeader =  req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        const token = bearerToken;
        jwt.verify(token, secret, (err, decoded)=>{
            if(err){
                res.status(401).json({
                    success:0,
                    message:"Invalid token"
                });
            }else{
                    var decoded = jwt_decode(token);
                    if(decoded.usuario.estado!='1'){
                    return res.status(400).json({
                        success: false,
                        message: 'Unauthorized Token'
                    });
                    }else{
                        next();
                        
                    }
            } 
            
        });
    }else{
        res.status(401).json({
            success:0,
            message: "Access denied unautorized user"
        });
    }
}

module.exports={
    checkToken
}