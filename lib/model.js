#!/usr/bin/env node

const argv = require('yargs').usage('\nUsage:\nnitro-model --name=sample\nCreates A Model.').argv;
const fs = require('fs');
let app_root = process.cwd();

if(argv.name == undefined || argv.name == "" || argv.name == null){
    console.log('Model Name Is Required');
}
else{
// Make Model
model = argv.name.toLowerCase();
modelCap = argv.name[0].toUpperCase() +  argv.name.slice(1);

let content_model = "const mongoose = require('mongoose');\n\nconst "+ model +"Schema = mongoose.Schema({\n created_at:{\n  type: Date,\n  default: Date.now\n },\n updated_at:{\n  type: Date,\n  default: Date.now\n }\n});\n\nmodule.exports = mongoose.model('"+ modelCap +"', "+ model +"Schema);";
        fs.appendFile(app_root + '/model/'+ modelCap +'.js', content_model, function (err) {
            if (err) console.log(err);
            console.log(argv.name + " Model Created Successfully");
        });
}