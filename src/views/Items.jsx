const React = require('react');
const Layout = require('./Layout');

module.exports = function Items({ categories, email, items }) {
  return (
    <Layout categories={categories} email={email}>
      {email ? (
        <div>
          <a href="/accountPanel"> Добавить новый товар</a>
          <div className="containerCategory">
            {items.length ? (
              items.map((item) => (
                <div
                  className="card"
                  style={{ width: '18rem' }}
                  key={`${item.id}item`}
                >
                  <img src={item.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                  <div className="card-body">
                    <a className="btn" href="#">
                      {' '}
                      заказать
                    </a>
                    <a className="btn" href="#">
                      изменить
                    </a>
                    <a className="btn" href="#">
                      удалить
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <p>товаров нет</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <div className="containerCategory">
            {items.length ? (
              items.map((item) => (
                <div
                  className="card"
                  style={{ width: '18rem' }}
                  key={`${item.id}item`}
                >
                  <img src={item.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                  <div className="card-body">
                    <a className="btn" href="#">
                      {' '}
                      заказать
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <p>товаров нет</p>
              </div>
            )}
          </div>
          <button> показать все товары</button>
        </div>
      )}
    </Layout>
  );
};
