import express from 'express' ;
const router=express.Router();

import usersController from '../controller/usersController.js';


router.route('/')
    .post(usersController.create);

export default router;