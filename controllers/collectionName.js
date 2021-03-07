//init code
const router = require('express').Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
//!imported schema "C" upper-case
const databaseCollectionName = require('../models/collectionName');

//? jWT
const jwt = require('jsonwebtoken');

//middleware setup

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// routes  goes here route for /api/user/
router.all('/', function (req, res) {
  return res.json({
    status: true,
    message: 'user controller working',
  });
});

//create new user
// routes  goes here route for /api/user/createNew

router.post(
  '/create',
  [
    //check by express validator of username password with schema
    check('username').not().isEmpty().trim().escape(),
    check('password').not().isEmpty().trim().escape(),
    check('email').isEmail().normalizeEmail(),
  ],
  function (req, res) {
    //check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        status: false,
        message: 'form validation false',
        errors: errors.array(),
      });
    }

    // VALIDATION OKKKKK

    //!hash password code
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);

    // create new use model
    var temp = new databaseCollectionName({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    //! insert data into database   using ".save" method
    temp.save(function (error, result) {
      // check error
      if (error) {
        return res.json({
          status: false,
          message: 'DB Insert Fail...',
          error: error,
        });
      }

      //! Everything OK   it shows if saved in db or not but when using jwt we cant do it | it gets  overlapped..
      // return res.json({
      //   status: true,
      //   message: 'DB Insert Success...',
      //   result: result,
      // });
    });

    //! using  JWT
    const payload = {
      user: {
        id: temp.id,
      },
    };
    jwt.sign(
      payload,
      'secret',
      {
        expiresIn: 360000,
      },
      (err, token) => {
        if (err) throw err;
        res.json({
          token,
        });
      }
    );

    //? -----------------------------------------DATABASE INSERTION end

    // !--------form validation output message warning it gets overlapped with mongodb response msg
    // output data for form validation
    // return res.json({
    //   formStatus: true,
    //   formMessage: 'form validation success',
    //   formData: req.body,
    //   formHashedPassword: hashedPassword,
    // });
    // !--------form validation output message warning it gets overlapped with mongodb response msg
  }
);

//route to read data

router.get('/read', function (req, res) {
  databaseCollectionName.find(function (error, result) {
    // check error
    if (error) {
      return res.json({
        status: false,
        message: 'DB Find Fail....',
        error: error,
      });
    }

    //if everything is OK
    return res.json({
      status: true,
      message: 'DB find Success...',
      result: result,
    });
  });
});

//reading databaseCollectionName documents
router.get('/read/:email', function (req, res) {
  databaseCollectionName.find(
    { email: req.params.email },
    function (error, result) {
      // check error
      if (error) {
        return res.json({
          status: false,
          message: 'DB Find Fail....',
          error: error,
        });
      }

      //if everything is OK
      return res.json({
        status: true,
        message: 'DB find Success...',
        result: result,
      });
    }
  );
});

//? update user document

// update user document
router.put('/update/:id', function (req, res) {
  // check email is empty or not
  if (req.params.id) {
    // update user document
    databaseCollectionName.findByIdAndUpdate(
      req.params.id,

      //?It updates the existing username to => Shubham Arora
      { username: 'Shubham Arora' },
      function (error, result) {
        // check error
        if (error) {
          return res.json({
            status: false,
            message: 'DB Update Fail...',
            error: error,
          });
        }

        // if everything OK
        return res.json({
          status: true,
          message: 'DB Update Success...',
          result: result,
        });
      }
    );
  } else {
    return res.json({
      status: false,
      message: 'Email not provided...',
    });
  }
});

router.delete(
  '/delete/:email',

  function (req, res) {
    //? check email not empty
    if (req.params.email) {
      databaseCollectionName.remove(
        { email: req.params.email },

        //?In case if error occurs after email is provided
        function (error, result) {
          //check error
          if (error) {
            return res.json({
              status: false,
              message: 'email dont exist in database to delete',
            });
          }

          //? everything ok
          return res.json({
            status: true,
            message: 'success in deleting the document with provided email',
          });
        }
      );
    }
  }
);

//module exports
module.exports = router;
