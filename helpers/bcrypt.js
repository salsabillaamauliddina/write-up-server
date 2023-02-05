const bcrypt = require('bcrypt');

const hashPassword = (password) => {
  const salt = bcrypt.genSalt(8);
  return bcrypt.hash(password, salt);
}

const checkPassword = (password , hashed) => {
  return bcrypt.compare(password, hashed);
}

module.exports = { hashPassword, checkPassword };