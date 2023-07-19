const React = require('react');
const Layout = require('./Layout');

module.exports = function AllItems({ categories, email, items }) {
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
                    <button>
                      <a href="#">заказать</a>
                    </button>
                    <button>
                      <a href="#">изменить</a>
                    </button>
                    <button>
                      <a href="#">удалить</a>
                    </button>
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
