import {changeStatus} from "../helpers/changeStatus.js"
const status=(req,res)=>{
    let {id}=req.body
 changeStatus(id)
}