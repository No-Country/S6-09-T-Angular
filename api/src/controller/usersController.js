import userSchema from '../models/userSchema.js';
import { buildParams } from './helpers.js';
import { enviar } from '../helpers/email.js';


const validParams = ['name', 'email', 'password'];
//Crear usuario
const createUser = async (req, res, next) => {

    let params = buildParams(validParams, req.body);
    try {
        let user = await userSchema.create(params);
        req.user = user; //Se guarda el objeto user en req para que los siguientes middlewares puedan usuarlo
        //user.password = undefined; //para que no se muestre la contraseña
        enviar(user, "bienvenida");
        //res.send("Usuario registrado exitosamente.")
        next();
    } catch (error) {
        console.log(error);
    }
};

//Update usuario

//Eliminar usuario (solo si es administrador de la plataforma Classemote)

//Ingresar Usuario

//module.exports={create}
export { createUser };