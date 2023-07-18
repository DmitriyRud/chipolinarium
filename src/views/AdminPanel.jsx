const React = require('react');

const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <script defer src="/js/adminPanel.js" />
      <h2>Войдите на сайт</h2>
      <hr />
      <form id="logForm" name="logName">
        <p className="paragraph"></p>
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input name="email" type="email" className="form-control" id="email" />
        <label htmlFor="Password" className="form-label">
          Password
        </label>
        <input
          name="password"
          type="password"
          className="form-control"
          id="Password"
        />
        <hr />
        <button type="button" className="btn btn-primary">
          Отправить
        </button>
      </form>
      <hr />
      <h3 className="logMsg"> </h3>
    </Layout>
  );
};
