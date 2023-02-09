import User from '../models/userSchema.js';
import buildParams from './helpers.js';


const validParams=['name','email', 'password'];
//1ero probaré una función síncrona:
function create(req,res){
    let params=buildParams(validParams, req.body);

    User.create(params).then(user=>{
        res.json(user);
    }).catch(err=>{
        console.log(err);
    });
}

//module.exports={create}
export default create;