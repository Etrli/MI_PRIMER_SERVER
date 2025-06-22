import { crearUsuario } from "../controllers/user.controllers.js";
import express from "express"

const router = express.Router() 
router.post("/create",crearUsuario);

export default router;