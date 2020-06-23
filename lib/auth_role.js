#!/usr/bin/env node

const argv = require('yargs').usage('\nUsage:\nnitro-auth-role --name=sample\nCreates A User Role.').argv;
const fs = require('fs');
let app_root = process.cwd();
console.log(app_root);

if(argv.name == undefined || argv.name == "" || argv.name == null){
    console.log('Auth Role Name Is Required');
}
else{
// Make Controller
role = argv.name.toLowerCase();
roleCap = argv.name[0].toUpperCase() +  argv.name.slice(1);

let content_controller = "\"use strict\";\nconst jwt = require('jsonwebtoken');\nconst Users = require('../model/Users');\nconst cookieEncrypt = require('./cookieEncrypt');\nconst {v4: uuidv4} = require('uuid');\n\nconst cookieConfig = {\n  httpOnly: true,\n  maxAge: 604800000,\n  signed: true,\n  sameSite: true,\n  secure: (process.env.APP_ENV == 'production') ? true : false\n};\n\n// Admin Middleware\n// Similar To Auth Middleware\nmodule.exports = async function (req,res,next){\n    let token = req.signedCookies.nitromvc_session;\n    if (!token) return res.status(401).render('errors/401');\n    \n    if (token.startsWith('Bearer ')) {\n        token = token.slice(7, token.length);\n      }\n\n    await jwt.verify(token, process.env.JWT_APP_KEY, async function (err, decoded) {\n      if (err){\n        if(req.signedCookies.nitromvc_refresh){\n         let refresh_token =  cookieEncrypt.decrypt(req.signedCookies.nitromvc_refresh);\n         await Users.findOne({refresh_token: refresh_token}, async function(err,user){\n          if(err) return console.log(err);\n          if(!user) return res.status(500).render('errors/500');\n          // Check Admin\n          if (user.user_type != 'admin' || user.user_type != '"+ role +"') return res.status(400).render('errors/400');\n  \n          const token = await jwt.sign(\n            {\n                _id: cookieEncrypt.encrypt(String(user._id))\n            },\n            process.env.JWT_APP_KEY,\n            {\n                expiresIn: process.env.REFRESH_JWT_INTERVAL\n            }\n            );\n      let refresh_result = uuidv4();\n      req.user_id = String(user._id);\n      res.cookie('nitromvc_session', token, cookieConfig).cookie('nitromvc_refresh', cookieEncrypt.encrypt(refresh_result), cookieConfig).status(200);\n      Users.updateOne({_id: String(user._id)},{refresh_token: refresh_result}, function(err, data) {\n        if(err) return console.log(err);\n     });\n    });\n\n      }\n      else{\n        return res.status(500).render('errors/500');\n      }\n      }\n    else{\n      let id = cookieEncrypt.decrypt(String(decoded._id));\n      await Users.findById(id, function (err, user) {\n        if (!user) {\n          return res.status(401).render('errors/401');\n        }\n        else if (user.user_type != 'admin' || user.user_type != '"+ role +"') {\n          return res.status(400).render('errors/400');\n        }\n        else{\n          req.user_id = user._id;\n        }\n      });\n    }\n  });\n    next();\n}";
        fs.appendFile(app_root + '/helpers/'+ "is" + roleCap +'.js', content_controller, function (err) {
            if (err) console.log(err);
            console.log(argv.name + " Role Created Successfully");
        });
}