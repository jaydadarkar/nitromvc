#!/usr/bin/env node

const argv = require('yargs').usage('\nUsage:\nnitro-mvc --name=sample \nCreates A Model, A Controller And A View Directory With Create, Read And Read One Views.').argv;
const fs = require('fs');
let app_root = process.cwd();

if(argv.name == undefined || argv.name == "" || argv.name == null){
    console.log('Module Name Is Required');
}
else{
// Make Controller
let content_controller = "\"use strict\";\nconst mongoose = require('mongoose');\nconst route = require('../route/app');\nconst csrf = require('csurf');\nconst csrfProtection = csrf({cookie: {key: '_csrf', path: '/', httpOnly: true, sameSite: true, maxAge: 604800, secure: (process.env.APP_ENV == 'production') ? true : false}});\nconst nitro = require('@jaydadarkar/nitrocore');\nconst cookieParser = require('cookie-parser');\nconst bodyParser = require('body-parser');\nconst parseForm = bodyParser.urlencoded({ extended: false });\nconst cookieEncrypt = require('../helpers/cookieEncrypt');\nconst cookieConfig = {\n    httpOnly: true,\n    maxAge: 604800000,\n    signed: true,\n    sameSite: true,\n    secure: (process.env.APP_ENV == 'production') ? true : false\n};\nconst mail = require('../helpers/mail');\nconst { check, validationResult } = require('express-validator');\n\nexports.create = async (req,res,next) => {\n\n}\n\nexports.store = async (req,res,next) => {\n\n}\n\nexports.read = async (req,res,next) => {\n\n}\n\nexports.readOne = async (req,res,next) => {\n\n}\n\nexports.update = async (req,res,next) => {\n\n}\n\nexports.delete = async (req,res,next) => {\n\n}";
        fs.appendFile(app_root + '/controller/'+ argv.name.toLowerCase() +'.controller.js', content_controller, function (err) {
            if (err) console.log(err);
        });

// Make Model
model = argv.name.toLowerCase();
modelCap = argv.name[0].toUpperCase() +  argv.name.slice(1);

let content_model = "const mongoose = require('mongoose');\n\nconst "+ model +"Schema = mongoose.Schema({\n created_at:{\n  type: Date,\n  default: Date.now\n },\n updated_at:{\n  type: Date,\n  default: Date.now\n }\n});\n\nmodule.exports = mongoose.model('"+ modelCap +"', "+ model +"Schema);";
        fs.appendFile(app_root + '/model/'+ modelCap +'.js', content_model, function (err) {
            if (err) console.log(err);
        });

// Make Views
fs.mkdir(app_root + '/views/' + argv.name.toLowerCase(), (err) => { 
    if (err) { 
        return console.error(err);
    }
    else{
    let content_view = "<%- include('../includes/header'); -%>\n\n<%- include('../includes/footer'); -%>";
        fs.appendFile(app_root + '/views/'+ argv.name.toLowerCase() +'/create.ejs', content_view, function (err) {
            if (err) console.log(err);
        });
        fs.appendFile(app_root + '/views/'+ argv.name.toLowerCase() +'/read.ejs', content_view, function (err) {
            if (err) console.log(err);
        });
        fs.appendFile(app_root + '/views/'+ argv.name.toLowerCase() +'/readOne.ejs', content_view, function (err) {
            if (err) console.log(err);
        });
    }
    });
    console.log('Model, View And Controller Created...');
}