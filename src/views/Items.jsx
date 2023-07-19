const React = require('react');
const Layout = require('./Layout');

module.exports = function Catalog({ categories, email, items }) {
  return (
    <Layout categories={categories} email={email}>
      {email ? (
        <div>
          <a href="/accountPanel"> Добавить новый товар</a>
          <div className="containerCategory">
            {items.length ? (
              items.map((item) => (
                <div class="card" style="width: 18rem;">
                  <img src={item.image} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <p class="card-text">{item.description}</p>
                  </div>
                  <div class="card-body">
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
                <div class="card" style="width: 18rem;">
                  <img src={item.image} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <p class="card-text">{item.description}</p>
                  </div>
                  <div class="card-body">
                    <button>
                      <a href="#">заказать</a>
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
          <button> показать все товары</button>
        </div>
      )}
    </Layout>
  );
};
