const React = require('react');
const Layout = require('./Layout');

module.exports = function Catalog({ categories, email }) {
  return (
    <Layout categories={categories} email={email}>
      <script defer src='/js/catalog.js'/>
      <link rel="stylesheet" href="/css/style.css" />
      <link rel='stylesheet' href='/css/catalog.css'/>

      <div className='allItems-container container'>
        <a className="btn allItems" href="catalog/items">
          показать все товары
        </a>
      </div>

      {email ? (
        <div className="container">
          <a href="/accountPanel"> Добавить новую категорию</a>
          <div className="containerCategory">
            {categories.length ? (
              categories.map((category) => (
                <div className="card" key={`${category.id}item`}>
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
                    <div className="card-btn">
                      <a className="btn-card btn" href={`/catalog/${category.id}`}>
                        подробнее
                      </a>
                      <a className="btn-card btn editBtn" href="#" id={category.id}>
                        изменить
                      </a>
                      <a className="btn-card btn deleteBtn" href="#" id={category.id} data-delid={category.id}>
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
        <div className="container">
          <div className="containerCategory">
            {categories.length ? (
              categories.map(category => (
                <div className="card" key={`${category.id}item`}>
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
                      <div className="card-btn">
                        <a className="btn btn-card" href={`/catalog/${category.id}`} id={category.id}>
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
        </div>
      )}
    </Layout>
  );
};
