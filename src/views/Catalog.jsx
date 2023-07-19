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
                <div className="card mb-3" style={{ maxWidth: '540px' }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={category.image}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{category.title}</h5>
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
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
                <div className="card mb-3" style={{ maxWidth: '540px' }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={category.image}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{category.title}</h5>
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <button>
                          <a href="#">заказать</a>
                        </button>
                      </div>
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
          <button> показать все товары</button>
        </div>
      )}
    </Layout>
  );
};
