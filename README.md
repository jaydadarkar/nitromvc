# NITRO MVC
Simple MVC Framework

```sh
$ npm install -g @jaydadarkar/nitromvc
$ mkdir example
$ cd example
$ nitro-init
$ npm install
$ npm run key:generate
$ npm start
```

## Installation
1. npm install -g @jaydadarkar/nitromvc (Globally install NITRO MVC).
2. mkdir myapp (Make A Directory With Your App Name).
3. cd myapp (Go To That Directory).
4. nitro-init (Initialize An Empty Application).
5. npm install (Install All The Required Dependences).
6. Setup ENV. Make necessary changes to .env file. (App Configuration, Mail Configuration).
7. Connect To MongoDB (Replace DB, MONGO_DATABASE_URI, MONGO_DATABASE_URL in the env file).
8. Setup package.json (Rename your application name and other details).
9. npm run key:generate (Generate App Keys).
10. npm start (Start Nodemon).
11. Visit https://localhost/
12. Hit nitro-help to read the docs from command line.
13. Alternatively, once your application is running, you can visit http://localhost:{port}/docs/ to read the docs in detail.

## Usage
1. To Make A Controller, Hit: nitro-controller --name={name_of_controller}.
2. To Make A Model, Hit: nitro-model --name={name_of_model}.
3. To Make A User Admin, Hit: npm run-script make:admin --name={email_of_registered_user}.
4. To Make A Role, Hit nitro-auth-role --name={name_of_role}. The use is{RoleName} as a middleware in the routes.
5. To Delete Current Project, Hit nitro-delete.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change or send an email.

## Thank You
1. B Crypt
2. Body Parser
3. Bootstrap, JQuery And Poppers
4. Cookie Parser
5. Crypto
6. CSURF
7. Dot ENV
8. EJS
9. Express
10. Express Validator
11. JWT
12. Mongoose
13. Morgan
14. Node Mailer
15. Nodemon
16. Superagent
17. UUID
18. YARGV

## Author
[Jay Dadarkar](https://jaydadarkar.com/)

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Changelog
```
(v1.1.0) => { Bootstrap, Storage, Docs, NitroCore, Production Environment, Public Static Assests }
(v1.0.0) => { MVC, Auth, Roles, Error Pages, Commands }
```
