const usuarios = require('../models').usuario;
//Creamos una constante que se le asigna el archivo llamado usuarios que se encuentra en la carpeta models / usuarios. Nota: el archivo no lo cargamos con extension.
var token = require('../services/jwt');
function create(req,res){//Creamos una función llamada "crearusuario" y le pasamos los argumentos "req" "request" que son los datos que se envian del front y res "Response" que son los datos que procesa Node)
    usuarios.create(req.body)
    .then(usuarios=>{//Función promesa, evalua, si la inserción se llevo acabo. Una funcion promesa envía dos valores, uno donde se cumple la promesa ".then" y otro donde no se cumple ".catch".
         res.status(200).send({usuarios});//Sí se cumple la promesa envíamos un código 200 de que se realizo satisfactriamente 
    })
    .catch(error=>{//Si la función promesa no se cumple 
        res.status(500).send({error});//Mandamos un codigo de error (500) y enviamos el error
    })
}
function login(req,res){
    usuarios.findOne({
        where:{
            usuario:req.body.usuario,
            password:req.body.password
        }
    })
     .then(busqueda=>{
        if(busqueda){
            if(req.body.token){
                res.status(200).send({
                    token: token.createToken(busqueda)
                });
            }else{
                res.status(200).send({
                    busqueda: busqueda               
                });
            }
        }else{
            res.status(401).send({message:"Acceso no autizado"});
        }
    })
    .catch(error=>{
        res.status(500).send({message: "Ocurrio un error al buscar el usuario"});
    })
}
module.exports={
    create,
    login
}