 var nJwt = require('njwt');
 var config = require('../config/config');
 var secret = config.token_secret;

 exports.createToken=(usuario)=>{
    var parametros = {
        sub:usuario.id,
        usuario:usuario.usuario,
        id_rol:usuario.id_rol
    }
    var jwt = nJwt.create(parametros,secret);
    var tiempo = new Date();
    tiempo.setHours(tiempo.getHours()+24);
    jwt.setExpiration(tiempo);

    var token = jwt.compact();
    return token;
 }