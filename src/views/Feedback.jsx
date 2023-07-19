const React = require('react');

const Layout = require('./Layout');

module.exports = function Feedback({categories}) {
  return (
    <Layout categories={categories}>
        <script defer src='/js/feedback.js'></script>

        <button type="submit" className="btn btn-primary feedback">Написать отзыв</button>


      <div style={{ width: '30%' }}>
        <form id="feedBackForm" style={{ display: 'none' }}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Адрес электронной почты</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">Данное поле заполняется, только если вы хотите, что бы наши менеджеры связались с Вами. Мы никогда никому не передадим вашу электронную почту.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Ваше имя</label>
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Введите Ваше имя" />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Напишите Ваш отзыв</label>
            <textarea type="text" className="form-control" id="exampleInputPassword1" placeholder="Ваше мнение о нас..." />
          </div>

          <button type="submit" className="btn btn-primary">Отправить</button>
          <button type="submit" className="btn btn-primary closeFormBtn">Закрыть форму</button>
        </form>
      </div>

      <hr />

      <div className="card" style={{ width: '70%' }}>
        <div className="card-body">
          <h5 className="card-title">тут будет имя пользователя</h5>
          <p className="card-text">а тут текст отзыва</p>
        </div>
      </div>
      <div className="card" style={{ width: '70%' }}>
        <div className="card-body">
          <h5 className="card-title">тут будет имя пользователя</h5>
          <p className="card-text">а тут текст отзыва</p>
        </div>
      </div>
      <div className="card" style={{ width: '70%' }}>
        <div className="card-body">
          <h5 className="card-title">тут будет имя пользователя</h5>
          <p className="card-text">а тут текст отзыва</p>
        </div>
      </div>
    </Layout>
  );
};
