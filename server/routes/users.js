var express = require('express');
var router = express.Router();
var cors = require('cors');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

// User details are stored in this variable 
const userModel = require('../models/register.model');
router.use(cors());

process.env.SECRET_KEY = 'djnvbc';

/* POST user registration form details. */
router.route('/signup')

  .post((req, res, next) => {

    const userData = new userModel({

      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password
    })

    /** Checking wheather user is already available or not */
    userModel.findOne({
      email: req.body.email
    })
      /** result is the respons from mongodb */
      .then(result => {
        /** !result mean no user is registered */
        if (!result) {

          bcrypt.hash(req.body.password, 10, (err, hash) => {
            userData.password = hash;
            userData.save()
              .then(result => {
                res.json({ status: result.email + ' Registered' });
              })
          })
        }
        else {

          res.json({ error: 'User is already registered, Please try with another email id.' });
        }
      })
      .catch(err => {
        res.send('error ' + err);
      })

  })

/** POST login form */

router.route('/login')

  .post((req, res, next) => {

    userModel.findOne({
      email : req.body.email
    })

      .then(result => {

        if (result) {

          if (bcrypt.compareSync(req.body.password, result.password))
          {
            const payload = {

              _id : result._id,
              first_name : result.first_name,
              last_name : result.last_name,
              email : result.email
            }

            /** From now we are providing stateless authentication by jwt-tokens */
            let token = jwt.sign(payload,process.env.SECRET_KEY,{
              expiresIn : 1440
            })
            res.send(token);
          }
          else{
            res.json('User does not exists, please enter valid Email and Password'); 
          }
        }
        else{
          res.json('User does not exists, please enter valid Email and Password'); 
        }
      })
      .catch((err)=>{
        res.send('error'+err);
      })
  })

module.exports = router;
