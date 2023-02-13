import userSchema from '../models/userSchema.js';
import { buildParams } from './helpers.js';
import {enviar} from '../helpers/email.js';


const validParams = ['name', 'email', 'password'];
//Crear usuario
const createUser = async (req, res) => {
    
    let params = buildParams(validParams, req.body);
    console.log(params);


    try {
        let user = await userSchema.create(params);
        user.password=undefined
        res.send(user)
        enviar(user,"bienvenida");
        res.send("Usuario registrado exitosamente.")
    } catch (error) {
        console.log(error);
    }
};

//Update usuario

//Eliminar usuario (solo si es administrador de la plataforma Classemote)

//Ingresar Usuario

//module.exports={create}
export { createUser };