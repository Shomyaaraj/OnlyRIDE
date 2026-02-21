const captainController = require('../controllers/captain.controller');
const express=require('express');
const router=express.Router();
const{body}=require('express-validator');


router.post('/register', [
    body('email').isEmail().withMessage('invalid email address'),
    body('fullname.fistname').isLength({min: 3}).withMessage('first name must be at least 3 characters long'),
    body('password').isLength({min: 6}).withMessage('password must be at least 6 characters long'),
    body('vehicle.color').isLength({min: 3}).withMessage('color must be at least 3 characters long'),
    body('vehicle.plate').isLength({min: 3}).withMessage('plate must be at least 3 characters long'),
    body('vehicle.capacity').isInt({min: 1}).withMessage('capacity must be at least 1'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('invalid vehicle type'),
], 
    captainController.registerCaptain
)




module.exports=router;