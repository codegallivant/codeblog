# codeblog

## :warning: Bugs

### Introduction
Blog App Interface. Advanced version of imad_app-MySQL(https://github.com/codegallivant/IMAD_App-MySQL). Meant for blogging programs.

### Online Imports: 
- Bootstrap
- Font Awesome

### Prerequisites
- Node.JS
- Github Octicons(Some)
- Node Modules
	- express
	- morgan 
	- path
	- mysql
	- crypto
	- bodyParser
	- session
	- nodemailer
	- generator 
	- config
	- http
	- formidable
	- fs
- config.js file

### How to setup config.js file:
- Create a file named config.js in the project folder
- Go inside it
- Put this code in it:
	```javascript
	process.env.DATABASE_PASSWORD='<database_password>';
	process.env.EMAIL_SERVICE='<email_service(Eg: rediffmail)>';
	process.env.EMAIL_AUTH_USER='<email_address>';
	process.env.EMAIL_AUTH_PASS='<email_password>';
	```
- Fill each code line with their respective values.
-You're done!

