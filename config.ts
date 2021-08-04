export const nodemailer = require('nodemailer')
export const express = require('express');
export const path = require('path');
export const PORT = process.env.PORT || 3000;
export const bodyParser = require('body-parser')

// Parse config

export const startConfig =(aplication:any)=>{
    aplication.use(bodyParser.urlencoded({extended:false}))
    aplication.use(express.json());
    aplication.use(express.static((path.join(__dirname,'public'))))
}