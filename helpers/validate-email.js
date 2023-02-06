function validateEmail (email) {
  const mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  if(email.value.match(mailformat)) {
    return true;
  }
  else {
    return false;
  }
};

module.exports = validateEmail;