const React = require('react');

const Layout = require('./Layout');

module.exports = function AccountPanel() {
  return (
    <Layout>
        <h2> Тут будут какие-то формы для создания </h2>

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
