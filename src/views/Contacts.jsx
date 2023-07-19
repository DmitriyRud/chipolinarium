const React = require('react');

const Layout = require('./Layout');

module.exports = function Contacts({ categories }) {
  return (
    <Layout categories={categories}>
      <div className='container' style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <h2> Контакты </h2>
          <p>
            {' '}
            <strong> ЮРИДИЧЕСКИЙ АДРЕС: </strong> 142117, МОСКОВСКАЯ ОБЛАСТЬ, Г.
            ПОДОЛЬСК УЛ. КИРОВА 62А
          </p>
          <p>
            {' '}
            <strong> АДРЕС ПРОИЗВОДСТВА: </strong> МО ЛУХОВИЦКИЙ РАЙОН С.
            НИЖНЕ-МАСЛОВО УЛ. МОЛОДЁЖНАЯ 11 А{' '}
          </p>
          <p>
            {' '}
            <strong> Часы приема заказов: </strong> ежедневно 10:00-22:00{' '}
          </p>

          <p>
            {' '}
            <strong> Отдел продаж: </strong>{' '}
          </p>
          <ul>
            <li> +7 (495) 7951054 </li>
          </ul>

          <p>
            {' '}
            <strong> Для писем: </strong>{' '}
          </p>
          <ul>
            <li> INMARCOPLUS@MAIL.RU </li>
          </ul>
        </div>

        <div>
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
    </Layout>
  );
};
