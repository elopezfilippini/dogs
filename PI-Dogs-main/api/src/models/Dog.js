const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', { id:{type: DataTypes.INTEGER,
     primaryKey:true},
  
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lifespan : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Weight : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Heigth : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Imagen: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};


// -  ID.\*
// -  Imagen.\*
// -  Nombre.\*
// -  Altura.\*
// -  Peso.\*
// -  Años de vida.\*