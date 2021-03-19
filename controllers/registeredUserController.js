//init code
const router = require('express').Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
//!imported schema "C" upper-case
const registeredUsersCollection = require('../models/registeredUsersSchema');

//middleware setup

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// routes  goes here route for /api/user/
router.all('/', function (req, res) {
  return res.json({
    status: true,
    message: 'registerUserController Working',
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
    var temp = new registeredUsersCollection({
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

      // Everything OK
      return res.json({
        status: true,
        message: 'DB Insert Success...',
        result: result,
      });
    });
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

// //route to read data

// router.get('/read', function (req, res) {
//   registeredUsersCollection.find(function (error, result) {
//     // check error
//     if (error) {
//       return res.json({
//         status: false,
//         message: 'DB Find Fail....',
//         error: error,
//       });
//     }

//     //if everything is OK
//     return res.json({
//       status: true,
//       message: 'DB find Success...',
//       result: result,
//     });
//   });
// });

// //reading registeredUsersCollection documents
// router.get('/read/:email', function (req, res) {
//   registeredUsersCollection.find(
//     { email: req.params.email },
//     function (error, result) {
//       // check error
//       if (error) {
//         return res.json({
//           status: false,
//           message: 'DB Find Fail....',
//           error: error,
//         });
//       }

//       //if everything is OK
//       return res.json({
//         status: true,
//         message: 'DB find Success...',
//         result: result,
//       });
//     }
//   );
// });

// //? update user document

// // update user document
// router.put('/update/:id', function (req, res) {
//   // check email is empty or not
//   if (req.params.id) {
//     // update user document
//     registeredUsersCollection.findByIdAndUpdate(
//       req.params.id,

//       //?It updates the existing username to => Shubham Arora
//       { username: 'Shubham Arora' },
//       function (error, result) {
//         // check error
//         if (error) {
//           return res.json({
//             status: false,
//             message: 'DB Update Fail...',
//             error: error,
//           });
//         }

//         // if everything OK
//         return res.json({
//           status: true,
//           message: 'DB Update Success...',
//           result: result,
//         });
//       }
//     );
//   } else {
//     return res.json({
//       status: false,
//       message: 'Email not provided...',
//     });
//   }
// });

// router.delete(
//   '/delete/:email',

//   function (req, res) {
//     //? check email not empty
//     if (req.params.email) {
//       registeredUsersCollection.remove(
//         { email: req.params.email },

//         //?In case if error occurs after email is provided
//         function (error, result) {
//           //check error
//           if (error) {
//             return res.json({
//               status: false,
//               message: 'email dont exist in database to delete',
//             });
//           }

//           //? everything ok
//           return res.json({
//             status: true,
//             message: 'success in deleting the document with provided email',
//           });
//         }
//       );
//     }
//   }
// );

//module exports
module.exports = router;
