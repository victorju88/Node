module.exports=(sequelize,DataTypes)=>{
    const usuario=sequelize.define('usuario',{
        usuario:DataTypes.STRING,
        password:DataTypes.STRING,
        id_rol:DataTypes.STRING,
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true
        },
        activo:DataTypes.BOOLEAN,
        createdAt:DataTypes.DATE,
        updatedAt:DataTypes.DATE
    });
    return usuario;
}
