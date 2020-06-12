#!/usr/bin/env node

const argv = require('yargs').usage('\nUsage:\nnitro-controller --name=sample\nCreates A Controller.').argv;
const fs = require('fs');
let app_root = process.cwd();

if(argv.name == undefined || argv.name == "" || argv.name == null){
    console.log('Controller Name Is Required');
}
else{
// Make Controller
let content_controller = "\"use strict\";\nconst mongoose = require('mongoose');\nconst csrf = require('csurf');\nconst csrfProtection = csrf({cookie: {key: '_csrf', path: '/', httpOnly: true, sameSite: true, maxAge: 604800, secure: (process.env.APP_ENV == 'production') ? true : false}});\nconst nitro = require('@jaydadarkar/nitrocore');\nconst cookieParser = require('cookie-parser');\nconst bodyParser = require('body-parser');\nconst parseForm = bodyParser.urlencoded({ extended: false });\nconst cookieEncrypt = require('../helpers/cookieEncrypt');\nconst cookieConfig = {\n    httpOnly: true,\n    maxAge: 604800000,\n    signed: true,\n    sameSite: true,\n    secure: (process.env.APP_ENV == 'production') ? true : false\n};\nconst mail = require('../helpers/mail');\nconst { check, validationResult } = require('express-validator');\n\nexports.create = async (req,res,next) => {\n\n}\n\nexports.store = async (req,res,next) => {\n\n}\n\nexports.read = async (req,res,next) => {\n\n}\n\nexports.readOne = async (req,res,next) => {\n\n}\n\nexports.update = async (req,res,next) => {\n\n}\n\nexports.delete = async (req,res,next) => {\n\n}";
        fs.appendFile(app_root + '/controller/'+ argv.name.toLowerCase() +'.controller.js', content_controller, function (err) {
            if (err) console.log(err);
            console.log(argv.name + " Controller Created Successfully");
        });
}