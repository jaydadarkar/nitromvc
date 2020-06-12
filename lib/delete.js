#!/usr/bin/env node

const fs = require("fs");
const argv = require('yargs').usage('\nUsage:\nnitro-delete\nDeletes Entire Project Except Node Modules.').argv;
let app_root = process.cwd();
 
const route = app_root + "/route";
const controller = app_root + "/controller";
const model = app_root + "/model";
const helper = app_root + "/helpers";
const views = app_root + "/views";
const logs = app_root + "/logs";
const storage = app_root + "/storage";
const env = app_root + "/.env";
const envex = app_root + "/.env.example";
const package = app_root + "/package.json";
const package_lock = app_root + "/package-lock.json";
const index = app_root + "/index.js";

const removeDir = function(path) {
    if (fs.existsSync(path)) {
      const files = fs.readdirSync(path)
   
      if (files.length > 0) {
        files.forEach(function(filename) {
          if (fs.statSync(path + "/" + filename).isDirectory()) {
            removeDir(path + "/" + filename)
          } else {
            fs.unlinkSync(path + "/" + filename)
          }
        })
        fs.rmdirSync(path)
      } else {
        fs.rmdirSync(path)
      }
    } else {
      console.log("Directory path not found.")
    }
  }

removeDir(route);
removeDir(controller);
removeDir(model);
removeDir(helper);
removeDir(views);
removeDir(storage);

try {
  fs.unlinkSync(env);
  fs.unlinkSync(envex);
  fs.unlinkSync(package);
  fs.unlinkSync(index);
  fs.unlinkSync(package_lock);
} catch(err) {
  console.error(err);
}