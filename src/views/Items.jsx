const React = require('react');
const Layout = require('./Layout');

module.exports = function Items({ categories, email, items }) {
  return (
    <Layout categories={categories} email={email}>
      <link rel="stylesheet" href="/css/catalog.css" />
      <script defer src="/js/item.js" />
      {email ? (
        <div id={items.category_id} className="container item-container">
          <a href="/accountPanel"> Добавить новый товар</a>
          <div className="containerCategory">
            {items.length ? (
              items.map((item) => (
                <div className="card" key={`${item.id}item`}>
                  <div id={`card-hidden-${item.id}`} className="card-hidden">
                    <img
                      id={`card-img-top-${item.id}`}
                      src={item.image}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 id={`card-title-${item.id}`} className="card-title">
                        {item.name}
                      </h5>
                      <p id={`card-text-${item.id}`} className="card-text">
                        {item.description}
                      </p>
                    </div>
                    <div className="card-btn">
                      <button
                        type="submit"
                        className="btn"
                        data-order-item={item.id}
                      >
                        {' '}
                        заказать
                      </button>
                      <button
                        type="submit"
                        className="btn editBtn"
                        data-edit-item={item.id}
                      >
                        изменить
                      </button>
                      <button
                        type="submit"
                        className="btn deleteBtn"
                        data-delete-item={item.id}
                      >
                        удалить
                      </button>
                    </div>
                  </div>
                  <div
                    className="hide_container_form"
                    style={{ display: 'none' }}
                    id={`hide-form-${item.id}`}
                  >
                    <p style={{ color: 'red' }} className="alert_items" />
                    <form
                      id={`editItem-${item.id}`}
                      encType="multipart/form-data"
                      name="newItem"
                    >
                      <select name="categoryName" id="">
                        <option disabled selected>
                          Обязательное поле
                        </option>
                        {categories.length ? (
                          categories.map((category) => (
                            <option value={category.title}>
                              {category.title}
                            </option>
                          ))
                        ) : (
                          <span> </span>
                        )}
                      </select>

                      <label htmlFor="pic_input">*Фото:</label>
                      <input id="pic_input" type="file" name="photoItem" />

                      <label htmlFor="pic_input">Название</label>
                      <input
                        id="titleItem"
                        type="text"
                        name="name"
                        value={item.name}
                      />

                      <label htmlFor="pic_input">Описание товара</label>
                      <textarea
                        id="titleCategory"
                        type="text"
                        name="description"
                        value={item.description}
                      />

                      <button
                        type="button"
                        className="btn btn-primary sendEditItem"
                        data-send-edit-item={item.id}
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
          <div className="containerCategory">
            {items.length ? (
              items.map((item) => (
                <div className="card" key={`${item.id}item`}>
                  <img src={item.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                  <div className="card-btn">
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
        </div>
      )}
    </Layout>
  );
};
