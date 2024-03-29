require('dotenv').config();
// const dog= require('./models/Dog.js')
// const temperament= require('./models/Temperament.js');
const { Sequelize, DataTypes } = require('sequelize');
  const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,DB_PORT,DB_NAME,DB_DEPLOY
} = process.env;
console.log("la data de process.env es "+ DB_USER) // remove this after you've confirmed it is working


const sequelize = new Sequelize(DB_DEPLOY, {
  logging: false,
  native: false,
  dialectOptions: {ssl:{require: true}}
});
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexión exitosa a la base de datos.');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}

// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
//   logging: false,
//   native: false,
// });
// async function testConnection() {
//   try {
//     await sequelize.authenticate();
//     console.log('Conexión exitosa a la base de datos.');
//   } catch (error) {
//     console.error('Error al conectar a la base de datos:', error);
//   }
// }
testConnection();
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Dog, Temperament} = sequelize.models;
// Aca vendrian las relaciones
// Product.hasMany(Reviews);

Dog.belongsToMany(Temperament,{through:"dog_temperament"})
Temperament.belongsToMany(Dog,{through:"dog_temperament"})
module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
