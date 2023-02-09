const User = require('../models/userSchema');
const buildParams=require('./helpers').builParams;


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

module.exports={create}