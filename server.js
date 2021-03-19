// *step1: install dependencies of package.json
/*  
*step2: create .env file with data :-
PORT=3000
DB_URL=mongodb://127.0.0.1:27017/myDatabase
*/

require('dotenv').config(); //accessing variable of .env file
const port = process.env.PORTSERVER;
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
//? REQUIRING connnectDatabase file
const database = require('./connectDatabase');
//! imported controller with "C" capital name+Controller namingConvention
const CollectionNameController = require('./controllers/collectionName');
const RegisterUserController = require('./controllers/registeredUserController');

const app = express();

// ? middleware setup
app.use(morgan('dev'));
app.use(cors());
app.use('/api/user', CollectionNameController); //?sending parameter/api/user+"/" is added of that function of router.all("/")

// ?Register User Middleware
app.use(morgan('dev'));
app.use(cors());
app.use('/register/user', RegisterUserController); //?sending parameter/api/user+"/" is added of that function of router.all("/")

//?start server
app.listen(port, function () {
  console.log('server running at port : ' + port);
});

//  ?defaults routes
app.all('/', function (req, res) {
  return res.json({
    status: true,
    message: 'Server On Duty....',
  });
});
