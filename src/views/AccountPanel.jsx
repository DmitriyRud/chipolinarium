const React = require('react');

const Layout = require('./Layout');

module.exports = function AccountPanel({ categories, feedbacks }) {
  return (
    <Layout categories={categories}>
      <script defer src="/js/accountPanel.js" />
      <h2> Тут будут какие-то формы для создания </h2>
      <p className="createCategory" />

      <form id="newCategory" encType="multipart/form-data" name="newCategory">
        <label htmlFor="pic_input">*Фото:</label>
        <input id="pic_input" type="file" name="photo" />

        <label htmlFor="pic_input">Название</label>
        <input id="titleCategory" type="text" name="title" />

        <button type="submit" className="btn btn-primary">
          Отправить
        </button>
      </form>

      <hr />

      <h2> А тут будут отзывы клиентов для модерации </h2>

      <div
        className="card card_feedback"
        style={{ width: '70%', display: 'flex', flexDirection: 'row' }}
      >
        <p className="approved_feedback" />
        {feedbacks.length ? (
          feedbacks.map((feedback) => (
            <div id={`card-${feedback.id}`} className="card_container_feedback">
              <div className="card-body" key={feedback.id}>
                <h5 className="card-title">{feedback.name}</h5>
                <p className="card-text">{feedback.body}</p>
              </div>
              <div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <button
                    id={feedback.id}
                    type="button"
                    className="btn btn-warning approved"
                  >
                    Отзыв прошёл
                  </button>
                  <button
                    id={feedback.id}
                    type="button"
                    className="btn btn-warning non-approved"
                  >
                    Отзыв не прошёл
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <span> Отзывов пока нет</span>
        )}
      </div>
    </Layout>
  );
};
