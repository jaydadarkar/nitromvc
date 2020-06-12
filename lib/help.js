#!/usr/bin/env node
let message = `
Welcome To NITRO MVC
A Simple MVC.

Let's Get Your New Project Started...
1. Create A Directory. (using command line, hit mkdir {name of project}).
2. Now that you have globally installed NITRO MVC, go to that directory (cd {name of project}) and hit nitro-init.
3. The nitro-init command initializes an empty application with basic Auth and Admin interface.
4. Once the application has finished it's job, you need to hit npm install to install the dependencies for the application.
5. Once you have installed your application's dependencies, we have to generate keys which help in encryption and decryption.
6. To generate app keys, hit npm run key:generate.
7. Once the keys are generated, we have to now configure our environment.
8. Open the .env file and add your application name, the url, the port, Mongo DB details, E-mail details and save the file.
9. Open the package.json file and rename the application name and make any other changes if required.
10. Now that you have your application configured, make sure your Mongo DB is running, hit npm start.
11. Visit your localhost page https://localhost/ or if you have another port, https://localhost:3000/
12. Users can register on site and login. If you have entered email configs in .env, a welcome email will be sent to user.
13. To make a user admin, in the command line, hit npm run make:admin --name={email_of_registered_user}.
14. If a user forgot his password, a reset password link can be sent through the login page and will be valid for 1 hour.
15. This script keeps phone number as a required field. You can change this in Model Users to required: false and in the routes file remove isLength{min:,max:} or modify accordingly.

To Create A Controller
1. Hit nitro-controller --name={name_of_controller}.
2. This command will create a basic CRUD for your controller and will require all the necessary files.

To Create A Model
1. Hit nitro-model --name={name_of_model}.
2. This command will create a basic Model with timestamps and will require all the necessary files.

To Create A Role
1. Hit nitro-auth-role --name={name_of_role}.
2. This command will create a role for your users. Now change the role of your users and use this as a middleware to protect your routes.
3. By default, the admin has access everywhere.

To Create A Model View Controller
1. Hit nitro-mvc --name={name_of_module}.
2. Creates A Model, A Controller And A View Directory With Create, Read And Read One Views.

Delete The Project
1. Hit nitro-delete.
2. This command will delete all the files except node_modules.

Ready For Production?
1. Change the env to production.
2. Morgan will log all the requests to logs/nitrologs.log.
3. Your Cookies will have a secure flag.
`;
console.log(message);