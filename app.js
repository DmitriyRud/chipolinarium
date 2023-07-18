require('@babel/register');
require('dotenv').config();

const express = require('express');

const morgan = require('morgan');
const path = require('path');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const indexRouter = require('./src/routers/indexRouter');

const sessionConfig = {
  name: process.env.COOKIE_NAME,
  store: new FileStore(),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 9999999999,
    httpOnly: true,
  },
};
const app = express();
const { PORT } = process.env;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));

app.use('/', indexRouter);


app.get('/404', (req, res) => {
  res.send('Page not found');
});

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
