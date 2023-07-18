const React = require("react");
const Layout = require("./Layout");

module.exports = function Home() {
  return (
    <Layout>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"
      />
      <link rel="stylesheet" href="/css/home.css" />
      <div>
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide slide1">
              <div className="slide1-text">
                <div className="slide1-title">
                  Магазин солений и салатов "Чиполинарий"
                </div>
              </div>
              <div className="image-slider">
                <img src="/image/slider/slider1.jpg" />
              </div>
            </div>
            <div className="swiper-slide slide2">
              <div className="slide2-container">
                <div className="slide2-item">Вкусно</div>
                <div className="slide2-item">Выгодно</div>
                <div className="slide2-item">Удобно</div>
              </div>
              <div className="image-slider">
                <img src="/image/slider/slider2.jpg" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="image-slider">
                <img src="/image/slider/slider3.jpg" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
        <div className="home-title">
            <h2 className="home-title-text">Доставка солений и салатов для Вашего ресторана, кафе или любого другого предприятия по оптовым ценам</h2>
            <div className="home-title-description">Компания "Чиполинарий" осуществляет снабжение солениями и салатами ресторанов, кафе, гостиниц, столовых, баров, комбинатов питания по Москве и Московской области</div>
        </div>
        <div className="home-price">
            <div className="price-form">
                <h3 className="price-form-title">Узнайте актуальные цены</h3>
                <div className="price-form-description">Заполните форму и мы пришлем Вам информацию об актуальных ценах</div>
                <form method="POST">
                    <input className="form-price__input" name='name' placeholder="Введите Ваше имя"></input>
                    <input className="form-price__input" name='phone' placeholder="Введите Ваш номер телефона"></input>
                    <input className="form-price__input" name='email' placeholder="Введите Ваше email"></input>
                    <button className="price-btn" type="button">Отправить</button>
                </form>
            </div>
        </div>
        <div className="advantages">
            <div className="advantages-inner">
                <div className="advantages-item">
                    <div className="advantages-img"><img src="/image/assortiment.png"></img></div>
                    <div className="advantages-title"><h5>Обширный ассортимент</h5></div>
                    <div className="advantaged-descr">Каталог на 2000 позиций позволит подобрать все необходимые продукты и товары для любой кухни</div>
                    <button type="button" className="advantages-btn">Каталог</button>
                </div>
                <div className="advantages-item">
                <div className="advantages-img"><img src="/image/assortiment.png"></img></div>
                    <div className="advantages-title"><h5>Нам доверяют</h5></div>
                    <div className="advantaged-descr">Посмотрите отзывы реальных клиентов</div>
                    <button type="button" className="advantages-btn">Отзывы</button>
                </div>
                <div className="advantages-item">
                <div className="advantages-img"><img src="/image/assortiment.png"></img></div>
                    <div className="advantages-title"><h5>УДОБНАЯ ДОСТАВКА</h5></div>
                    <div className="advantaged-descr">Доставка по Москве и области - в кратчайшие сроки напрямую от лучших поставщиков продуктов питания</div>
                    <button type="button" className="advantages-btn">ДОСТАВКА</button>
                </div>
            </div>
        </div>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
      <script defer src="/js/home.js" />
    </Layout>
  );
};
