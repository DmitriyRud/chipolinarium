const React = require('react');
const Layout = require('./Layout');

module.exports = function Catalog({ categories, email }) {
  return (
    <Layout categories={categories} email={email}>
      <script defer src="/js/catalog.js" />
      <link rel="stylesheet" href="/css/style.css" />
      <link rel="stylesheet" href="/css/catalog.css" />

      {email ? (
        <div id={categories.id} className="container category-container">
          <div className="allItems-container container">
            <a href="/accountPanel" className="btn btn-card btn-seeItems">
              {' '}
              Добавить новую категорию
            </a>
          </div>
          <div className="containerCategory">
            {categories.length ? (
              categories.map((category) => (
                <div className="card" key={`${category.id}item`}>
                  <div
                    id={`card-hidden-${category.id}`}
                    className="card-hidden"
                  >
                    <img
                      id={`card-img-top-${category.id}`}
                      src={category.image}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5
                        id={`card-title-${category.id}`}
                        className="card-title"
                      >
                        {category.title}
                      </h5>
                      <p id={`card-text-${category.id}`} className="card-text">
                        {category.description}
                      </p>
                    </div>
                    <div className="card-btn">
                      <a
                        className="btn-card btn"
                        href={`/catalog/${category.id}`}
                        id="btnAdmin"
                      >
                        подробнее
                      </a>

                      <button
                        type="button"
                        className="btn-card btn editBtn"
                        data-edit-category={category.id}
                        id="btnAdmin"
                      >
                        изменить
                      </button>
                      <button
                        type="button"
                        className="btn deleteBtn btn-card"
                        data-delete-item={category.id}
                        id="btnAdmin"
                      >
                        удалить
                      </button>
                    </div>
                  </div>
                  <div
                    className="hide_container_form"
                    style={{ display: 'none' }}
                    id={`hide-form-${category.id}`}
                  >
                    <p style={{ color: 'red' }} className="alert_items" />
                    <form
                      id={`editCategory-${category.id}`}
                      encType="multipart/form-data"
                      name="newCategory"
                      className="form_catalog"
                    >
                      <label htmlFor="pic_input">Фото:</label>
                      <input
                        id="pic_input"
                        type="file"
                        name="photo"
                        className="form-control"
                      />
                      <br />
                      <label htmlFor="title">Название:</label>

                      <input
                        id="title"
                        type="text"
                        name="title"
                        value={category.title}
                        className="form-control"
                      />
                      <br />
                      <label htmlFor="description">Описание товара:</label>
                      <textarea
                        id="description"
                        type="text"
                        name="description"
                        value={category.description}
                        className="form-control"
                      />
                      <br />
                      <button
                        type="button"
                        className="btn sendCategory"
                        data-send-edit-category={category.id}
                        id="btnAdmin"
                      >
                        Отправить
                      </button>
                    </form>
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
          <div className="allItems-container container">
            <a className="btn button_price" href="catalog/items">
              показать все товары
            </a>
          </div>
          <div className="containerCategory">
            {categories.length ? (
              categories.map((category) => (
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
                        <a
                          className="btn btn-card"
                          href={`/catalog/${category.id}`}
                          id={category.id}
                        >
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
