import express from 'express' ;
const router=express.Router();
import {create} from '../controller/usersController.js';


router.post('/users', create);

export default router;