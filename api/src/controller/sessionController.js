import userSchema from '../models/userSchema.js';

const authenticate = async (req, res, next) => {
    try {
        let user = await userSchema.findOne({ email: req.body.email });
        let valid = user.verifyPassword(req.body.password);
        if (valid) {
            req.user = user;
            next();
        } else {
            next(new Error("Credenciales inválidas"));
        }
    } catch (error) { //Esto se ejecuta si no se encuentra un usuario con el email y/o contraseña anteriores.
        next(error);
    }
}

export {authenticate};