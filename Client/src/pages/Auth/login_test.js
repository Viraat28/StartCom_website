function authenticate(email, password) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!email) {
    return false;
  } else if (!regex.test(email)) {
    return false;
  } else if (!password) {
    return false;
  } else {
    return true;
  }
}

module.exports = {
  authenticate: authenticate,
};
