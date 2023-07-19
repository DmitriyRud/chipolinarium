const React = require('react');
const Layout = require('./Layout');

module.exports = function AllItems({ categories, email, items }) {
  return (
    <Layout categories={categories} email={email}>
       <link rel='stylesheet' href='/css/catalog.css'/>
      {email ? (
        <div  className='container'>
          <a href="/accountPanel"> Добавить новый товар</a>
          <div className="containerCategory">
            {items.length ? (
              items.map((item) => (
                <div
                  className="card"
                  key={`${item.id}item`}
                >
                  <img src={item.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                  <div className="card-btn">
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
        <div  className='container'>
          <div className="containerCategory">
            {items.length ? (
              items.map((item) => (
                <div
                  className="card"
                  key={`${item.id}item`}
                >
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