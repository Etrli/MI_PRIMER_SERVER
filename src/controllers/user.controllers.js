import Usuario from "../models/user.models.js";




export const crearUsuario = async (req, res) => {

  try {
    const usuario = await Usuario.create(req.body);
    res.status(201).json(usuario);
  } catch (Error) {
    console.log("Error en crear el usuario", Error);
}};
