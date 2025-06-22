import Usuario from "../models/user.models.js";

//Obtener todos los Usuarios
export const obtenerUsuario = async (req, res) => {
  //Obtener a TODOS los Usuarios
  try {
    const usuario = await Usuario.findAll(req.body);
    res.status(201).json(usuario);
  } catch (Error) {
    console.log("Error en OBTENER el usuario", Error);
  }
};

//Crea los Usuarios
export const crearUsuario = async (req, res) => {
  //Verifación de parametros Nulos
  const { name, password, email } = req.body;
  if (name === "" || password === "" || email === "") {
        throw new Error("No pueden haber parámetros nulos ");
  }

  
  
  try {
    const usuario = await Usuario.create(req.body);
    res.status(201).json(usuario);
  } catch (Error) {
    console.log("Error en CREAR el usuario", Error);
  }
};

//Actualiza a los Usuarios
export const actualizarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.update(req.body);
    res.status(201).json(usuario);
  } catch (Error) {
    console.log("Error en ACTUALIZAR el usuario", Error);
  }
};

//Elimina a todos los Usuarios
export const eliminarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.destroy(req.body);
    res.status(201).json(usuario);
  } catch (Error) {
    console.log("Error en ELIMINAR el usuario", Error);
  }
};
