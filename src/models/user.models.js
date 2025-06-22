import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Usuario = sequelize.define("Usuario",{
    name:{type:DataTypes.STRING(50),allowNull:false},
    email:{type:DataTypes.STRING(50),allowNull:false,unique:true,validate:{isEmail:true}},
    password:{type:DataTypes.STRING(20),allowNull:false,validate:{len:[6,20]}},
    isActive:{type:DataTypes.BOOLEAN,allowNull:false}
});

export default Usuario;