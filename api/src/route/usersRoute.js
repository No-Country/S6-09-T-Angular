const express = require('express');
const exxpress=require('express');
const router=express.Router();

const usersController=require('../controller/usersController');


router.route('/')
    .post(usersController.create);