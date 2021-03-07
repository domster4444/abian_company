const express = require('express');
const router = express.Router();

const databaseCollectionName = require('../models/collectionName');

//? for login validation
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const { check, validationResult } = require('express-validator');

router.get('/', (req, res) => {
  res.send('get logged in user');
});

router.post(
  '/',
  [
    check('email', 'please enter valid email bro').isEmail(),
    check('password', 'please enter password bro').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        status: false,
        message: 'form validation false',
        errors: errors.array(),
      });
    }

    const { email, password } = req.body;
    try {
      let temp = await databaseCollectionName.findOne({ email });
      if (!temp) {
        return res.status(400).json({
          msg: 'Invalid  user not found with provide email',
        });
      }
      const checkpassword = await bcrypt.compare(password, temp.password);
      if (!checkpassword) {
        return res.status(400).json({
          msg: 'wrong password',
        });
      }
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
    } catch (error) {
      console.log(error.message);
      res.status(500).send('server error');
    }
  }
);

module.exports = router;
