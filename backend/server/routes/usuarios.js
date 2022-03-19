const usuariocontroller=require('../controllers').usuarios;//Creamos una constante llamada usuariocontroller y le asignamos el archivo usuario dentro de controllers
module.exports=(app)=>{
    app.post('/api/usuario',usuariocontroller.create);
    app.post('/api/login',usuariocontroller.login);
}

