const { User } = require('../models');
const { hashPassword } = require('../helpers/bcrypt');
const { createToken } = require('../helpers/jwt');


class UserController { 
  static async signup(req, res, next) {
    try { 
      const { username, email, password } = req.body;
      const newUser = { username, email, password };

      const createUser = await User.create(newUser);
      return res.status(201).json({
        id : createUser.id,
        username : newUser.username,
        email : newUser.email
      })
    }
    catch (err) {
      next ()
    }
  }

  static async signin(req, res, next) {

  }

  static async resetPassword(req, res, next) {

  }

  static async resetEmail(req, res, next) {

  }
};

module.exports = UserController;