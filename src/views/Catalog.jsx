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
        <div id={categories.id} className="container category-container">
          <a href="/accountPanel"> Добавить новую категорию</a>
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
                      <a className="btn-card btn" href={`/catalog/${category.id}`}>
                        подробнее
                      </a>



                      <button
                        type="button"
                        className="btn-card btn editBtn"
                        data-edit-category={category.id}
                      >
                        изменить
                      </button>
                      <button
                        type="button"
                        className="btn deleteBtn btn-card"
                        data-delete-item={category.id}
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
                    >
                      {/* <select name="categoryName" id="">
                        {categories.length ? (
                          categories.map((category) => (
                            <option selected value={category.title}>
                              {category.title}
                            </option>
                          ))
                        ) : (
                          <span> </span>
                        )}
                      </select> */}

                      <label htmlFor="pic_input">*Фото:</label>
                      <input id="pic_input" type="file" name="photo" />

                      <label htmlFor="title">Название</label>
                      <input
                        id="title"
                        type="text"
                        name="title"
                        value={category.title}
                      />

                      <label htmlFor="description">Описание товара</label>
                      <input
                        id="description"
                        type="text"
                        name="description"
                        value={category.description}
                      />

                      <button
                        type="button"
                        className="btn btn-primary sendCategory"
                        data-send-edit-category={category.id}
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
