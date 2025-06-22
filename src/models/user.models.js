//Acá se declara las caracteristicas quye va a tener la tabla, ya sea
//string,allownull,etc

import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

//Decalramos la const Usuario = sequelize.define para acceder a los datatypes
const Usuario = sequelize.define("Usuario", {
  name: { type: DataTypes.STRING(50), allowNull: false },Number:false,
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
    validate: { isEmail: true },
  },
  password: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  isActive: { type: DataTypes.BOOLEAN, allowNull: false },
});

export default Usuario;
