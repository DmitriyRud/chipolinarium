function isAuth(req, res, next) {
  if (req.session.email) {
    next();
  } else {
    res.redirect('/adminPanel');
  }
}

module.exports = isAuth;
