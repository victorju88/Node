const express = require('express');//librería para usar express
const bodyParser = require('body-parser');//librería para usar bodyParser
const app = express();


app.use(bodyParser.json());//Body parser nos sirve como un filtro de archivos enviados solo utiliza los archivos json
app.use(bodyParser.urlencoded({extended:true}));//bodyParser nos sirve para filtrar los archivos sin anidar
//cabeceras
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
//Rutas
require('./server/routes/usuarios')(app);
app.get('*', (req,res)=>{
    res.status(200).send({message:"Bienvenido al servidor NodeJS"})
}); 

module.exports=app;
