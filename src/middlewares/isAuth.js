function isAuth(req, res, next) {
  if (req.session.email) {
    next();
  } else {
    res.redirect('/user/login');
  }
}

module.exports = isAuth;
