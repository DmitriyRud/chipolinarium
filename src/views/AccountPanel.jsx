const React = require('react');

const Layout = require('./Layout');

module.exports = function AccountPanel({ categories }) {
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

        <button type="submit" className="btn btn-primary">Отправить</button>
      </form>


      <hr />


      <h2> А тут будут отзывы клиентов для модерации </h2>

      <div className="card" style={{ width: '70%', display: 'flex', flexDirection: 'row' }}>
        <div className="card-body">
          <h5 className="card-title">тут будет имя пользователя</h5>
          <p className="card-text">а тут текст отзыва</p>
        </div>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <button type="button" class="btn btn-warning"> Отзыв прошёл</button>
            <button type="button" class="btn btn-warning"> Отзыв не прошёл</button>
          </div>
        </div>
      </div>

      <div className="card" style={{ width: '70%', display: 'flex', flexDirection: 'row' }}>
        <div className="card-body">
          <h5 className="card-title">тут будет имя пользователя</h5>
          <p className="card-text">а тут текст отзыва</p>
        </div>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <button type="button" class="btn btn-warning"> Отзыв прошёл</button>
            <button type="button" class="btn btn-warning"> Отзыв не прошёл</button>
          </div>
        </div>
      </div>

      <div className="card" style={{ width: '70%', display: 'flex', flexDirection: 'row' }}>
        <div className="card-body">
          <h5 className="card-title">тут будет имя пользователя</h5>
          <p className="card-text">а тут текст отзыва</p>
        </div>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <button type="button" class="btn btn-warning"> Отзыв прошёл</button>
            <button type="button" class="btn btn-warning"> Отзыв не прошёл</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
