const router = require('express').Router();
const bcrypt = require('bcrypt');

const renderTemplate = require('../lib/renderTemplate');
const AdminPanel = require('../views/AdminPanel');

//const { User } = require('../../db/models');

router.get('/', (req, res) => {
  renderTemplate(AdminPanel, {}, res);
});

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      const checkPass = await bcrypt.compare(password, user.password);
      if (checkPass) {
        req.session.email = user.email;

        req.session.save(() => {
          res.json({ msg: 'Успешный вход' });
        });
      } else {
        res.json({ err: 'Пароль неверный' });
      }
    } else {
      res.json({ err: 'Такой пользователь не найден' });
    }
  } catch (error) {
    res.send('Что-то пошло не так', error);
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.log(error);
    } else {
      res.clearCookie(process.env.COOKIE_NAME);
    }
    res.redirect('/');
  });
});

module.exports = router;
