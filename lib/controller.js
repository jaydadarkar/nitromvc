#!/usr/bin/env node

const argv = require('yargs').argv;
const fs = require('fs');
let app_root = process.cwd();
console.log(app_root);

if(argv.name == undefined || argv.name == "" || argv.name == null){
    console.log('Controller Name Is Required');
}
else{
// Make Controller
let content_controller = "const mongoose = require('mongoose');\nconst route = require('../route/app');\nconst csrf = require('csurf');\nconst csrfProtection = csrf({ cookie: true });\nconst cookieParser = require('cookie-parser');\nconst bodyParser = require('body-parser');\nconst parseForm = bodyParser.urlencoded({ extended: false });\n\nexports.create = async (req,res,next) => {\n\n}\n\nexports.read = async (req,res,next) => {\n\n}\n\nexports.readOne = async (req,res,next) => {\n\n}\n\nexports.update = async (req,res,next) => {\n\n}\n\nexports.delete = async (req,res,next) => {\n\n}";
        fs.appendFile(app_root + '/controller/'+ argv.name.toLowerCase() +'.controller.js', content_controller, function (err) {
            if (err) console.log(err);
            console.log(argv.name + " Controller Created Successfully");
        });
}