const React = require('react');

const Layout = require('./Layout');

module.exports = function Feedback({ categories, feedbacks }) {
  return (
    <Layout categories={categories}>
      <link rel="stylesheet" href="/css/feedback.css" />
      <script defer src="/js/feedback.js" />
      <div className="main_feedback_container">
        <button type="submit" className="btn btn-primary feedback">
          Написать отзыв
        </button>

        <div style={{ width: '30%' }}>
          <p className="newFeedback" />
          <form id="feedBackForm" style={{ display: 'none' }}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Адрес электронной почты
              </label>
              <input
                name="email"
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                Данное поле заполняется, только если вы хотите, что бы наши
                менеджеры связались с Вами. Мы никогда никому не передадим вашу
                электронную почту.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Ваше имя
              </label>
              <input
                name="name"
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Введите Ваше имя"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Напишите Ваш отзыв
              </label>
              <textarea
                name="body"
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Ваше мнение о нас..."
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Отправить
            </button>
            <button type="submit" className="btn btn-primary closeFormBtn">
              Закрыть форму
            </button>
          </form>
        </div>

        <hr />
        <div className="feedback_container">
          {feedbacks.length ? (
            feedbacks.map((feedback) => (
              <div className="card" style={{ width: '70%' }} key={feedback.id}>
                <div className="card-body">
                  <h5 className="card-title">{feedback.name}</h5>
                  <p className="card-text">{feedback.body}</p>
                  <p className="card-text">
                    {new Date(feedback.createdAt).toISOString().split('T')[0]}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <h3>Отзывов пока нет</h3>
          )}
        </div>
      </div>
    </Layout>
  );
};
