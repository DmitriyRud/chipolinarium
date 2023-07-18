const React = require('react');

module.exports = function Layout({ children, categories }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/css/style.css" />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
          crossOrigin="anonymous"
        />
        <title>Чиполинарий</title>
      </head>
      <body>
        <header>
          <div className="header_container container">
            <div className="flex_up">
              <div className="logo">
                <a href="/" className="logo_link">
                  <img
                    src="/image/logo.jpeg"
                    alt="logo"
                    className="logo_image"
                  />
                </a>
              </div>
              <div className="supplies">
                <ul className="supplies_list">
                  <li className="supplies_item">Снабжение ресторанов</li>
                  <li className="supplies_item">Снабжение гостиниц</li>
                  <li className="supplies_item">Снабжение столовых</li>
                  <li className="supplies_item">Снабжение кафе</li>
                </ul>
              </div>
              <div className="contact_header">
                <a href="tel:+74957951054" className="phone_link">
                  <span>📞 +7 (495) 7951054</span>
                </a>
                <span>Позвоните нам</span>
                <span>inmarcoplus@mail.ru</span>
                <a href="#" className="price_info">
                  <p className="button_price">Запросить прайс-лист</p>
                </a>
              </div>
            </div>
            <hr className="color_line" />
            <div className="flex_down">
              <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          aria-current="page"
                          href="/about"
                        >
                          О нас
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/catalog">
                          Каталог
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/delivery">
                          Доставка
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/contacts">
                          Контакты
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/feedback">
                          Отзывы
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </header>
        <div className="mainContainer">{children}</div>
        <hr className="color_line" />
        <footer>
          <div className="footer_container">
            <div className="footer_up">
              <div className="logo">
                <a href="/" className="logo_link">
                  <img
                    src="/image/logo.jpeg"
                    alt="logo"
                    className="logo_image"
                  />
                </a>
                <ul className="supply_links">
                  <a href="/">
                    <li className="supplies_item">Снабжение ресторанов</li>
                  </a>
                  <a href="/delivery">
                    <li className="supplies_item">Доставка продуктов</li>
                  </a>
                  <a href="#">
                    <li className="supplies_item">Цены</li>
                  </a>
                  <a href="/about">
                    <li className="supplies_item">О нас</li>
                  </a>
                  <a href="/contacts">
                    <li className="supplies_item">Контакты</li>
                  </a>
                </ul>
              </div>
              <div className="catalog_container">
                <h4 className="catalog_header">Каталог</h4>
                <ul className="category_list">
                  {categories.length ? (
                    categories.map((category) => (
                      <a href={`/catalog/${category.id}`}>
                        <li className="category_lists">{category.title}</li>
                      </a>
                    ))
                  ) : (
                    <li className="empty_list" />
                  )}
                </ul>
              </div>
              <div className="info_container">
                <div className="sales_department">
                  <h4>Отдел продаж:</h4>
                  <a href="tel:+74957951054" className="phone_link">
                    <span>📞 +7 (495) 7951054</span>
                  </a>
                </div>
                <div className="email_contact">
                  <h4>Пишите нам:</h4>
                  <span>inmarcoplus@mail.ru</span>
                </div>
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <a
                    href="https://yandex.ru/maps?utm_medium=mapframe&utm_source=maps"
                    style={{
                      color: '#eee',
                      fontSize: '12px',
                      position: 'absolute',
                      top: '0px',
                    }}
                  >
                    Яндекс Карты
                  </a>
                  <a
                    href="https://yandex.ru/maps/1/moscow-and-moscow-oblast/house/molodyozhnaya_ulitsa_11a/Z0AYdQFoTEMHQFtufXRycn9hbQ==/?ll=39.711247%2C54.959259&utm_medium=mapframe&utm_source=maps&z=8.97"
                    style={{
                      color: '#eee',
                      fontSize: '12px',
                      position: 'absolute',
                      top: '14px',
                    }}
                  >
                    Молодёжная улица, 11А — Яндекс Карты
                  </a>
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=39.711247%2C54.959259&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgozNjUzODI5ODI0EqwB0KDQvtGB0YHQuNGPLCDQnNC-0YHQutC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0LPQvtGA0L7QtNGB0LrQvtC5INC-0LrRgNGD0LMg0JvRg9GF0L7QstC40YbRiywg0YHQtdC70L4g0J3QuNC20L3QtS3QnNCw0YHQu9C-0LLQviwg0JzQvtC70L7QtNGR0LbQvdCw0Y8g0YPQu9C40YbQsCwgMTHQkCIKDWZ5HUIVVVVbQg%2C%2C&z=8.97"
                    width="560"
                    height="400"
                    frameBorder="1"
                    allowfullscreen="true"
                    style={{ position: 'relative' }}
                  />
                </div>
              </div>
            </div>
            <div className="footer_down"></div>
          </div>
        </footer>
      </body>
    </html>
  );
};
