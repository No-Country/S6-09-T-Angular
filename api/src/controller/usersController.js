import userSchema from '../models/userSchema.js';
import { buildParams } from './helpers.js';

const validParams = ['name', 'email', 'password'];
//Crear usuario
const createUser = async (req, res) => {
    let params = buildParams(validParams, req.body);
    try {
        let usuario=await userSchema.create(params);
        console.log(usuario);
        res.send(usuario);
    } catch (error) {
        console.log(error);
    }
};

//module.exports={create}
export { createUser };