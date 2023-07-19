const React = require('react');
const Layout = require('./Layout');

module.exports = function Catalog({ categories, email }) {
  return (
    <Layout categories={categories} email={email}>
      {email ? (
        <div>
          <a href="/accountPanel"> Добавить новую категорию</a>
          <div className="containerCategory">
            {categories.length ? (
              categories.map((category) => (
                <div
                  className="card"
                  style={{ width: '18rem' }}
                  key={`${category.id}item`}
                >
                  <div>
                    <img
                      src={category.image}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{category.title}</h5>
                      <p className="card-text">{category.description}</p>
                    </div>
                    <div className="card-body">
                      <a className="btn" href={`/category/${category.id}`}>
                        {' '}
                        подробнее
                      </a>
                      <a className="btn" href="#">
                        изменить
                      </a>
                      <a className="btn" href="#">
                        удалить
                      </a>
                    </div>
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
            {categories.length ? (
              categories.map((category) => (
                <div
                  className="card"
                  style={{ width: '18rem' }}
                  key={`${category.id}item`}
                >
                  <a href={`/catalog/${category.id}`}>
                    <div>
                      <img
                        src={category.image}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">{category.title}</h5>
                        <p className="card-text">{category.description}</p>
                      </div>
                      <div className="card-body">
                        <a className="btn" href={`/category/${category.id}`}>
                          {' '}
                          подробнее
                        </a>
                      </div>
                    </div>
                  </a>
                </div>
              ))
            ) : (
              <div>
                <p>товаров нет</p>
              </div>
            )}
          </div>
          <a className="btn" href="catalog/items">
            показать все товары
          </a>
        </div>
      )}
    </Layout>
  );
};
