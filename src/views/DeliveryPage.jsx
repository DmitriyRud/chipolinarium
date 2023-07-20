const React = require('react');

const Layout = require('./Layout');

module.exports = function Delivery({ categories, deliveries }) {
  return (
    <Layout categories={categories}>
      <script defer src="/js/delivery.js" />
      <link rel="stylesheet" href="/css/delivery.css" />
      <div className="delivery">
        <h2> Доставка продуктов в рестораны и кафе </h2>
        <p>
          Дорогие Коллеги. В связи со сложившейся ситуацией наша компания
          расширяет спектр своих услуг. В настоящее время мы осуществляем
          доставку продуктов высокого качества не только организациям, профилем
          которых является сфера общественного питания, но и физическим лицам
          (на дом) по Москве и МО.
        </p>
        <p>
          Доставка товара в пределах МКАД от 6.000 тыс.руб бесплатно, за
          пределами МКАД доставка обсуждается индивидуально.
        </p>
        <p>
          Заказы осуществляются удобным для Вас способом по тел. 8 977 290 97
          39. Оперативная доставка 24/7!
        </p>
        <p>
          Обращаясь в компанию "Сити Продукт", Вы сможете размещать заказы на
          полный ассортимент товаров, которые необходимы для организации работы
          кухни в вашем заведении: это не только продовольственные товары, но
          также хозяйственные принадлежности, предметы сервировки стола и другие
          сопутствующие товары. Полный перечень товаров представлен в нашем
          каталоге.
        </p>
      </div>

      <hr />
      <div className="delivery" style={{ marginLeft: '2rem' }}>
        <h2>Регион и условия доставки продуктов</h2>
        <p>Основной регион доставки - Москва и Московская область.</p>
        <p>
          Доставка осуществляется ежедневно, в соответствии с графиком поставок.
          Как правило, доставка продуктов производится на следующий день после
          размещения заказа.
        </p>
        <p>
          Наша компания располагает собственным автопарком современных
          автомобилей, поэтому доставка продуктов в рестораны, кафе, столовые и
          другие предприятия питания осуществляется быстро и в удобное для
          клиентов время.
        </p>
        <p>
          В настоящее время мы осуществляем доставку продуктов высокого качества
          не только организациям, профилем которых является сфера общественного
          питания, но и физическим лицам на дом по Москве и МО
        </p>

        <div className="table_container">
          <p className="alert_table" />
          <table
            id="delivery_table"
            className="table"
            style={{ border: '2px solid black' }}
          >
            <thead>
              <tr>
                <th>Сумма заказа</th>
                <th>Стоимость доставки</th>
              </tr>
            </thead>
            <tbody>
              {deliveries.length ? (
                deliveries.map((el) => (
                  <tr id={`tr-${el.id}`} key={el.id}>
                    <td>{el.order_price}</td>
                    <td>{el.delivery_price}</td>
                    <td>
                      {' '}
                      <button
                        type="button"
                        className="btn btn-link usual-btn"
                        data-delete-delivery={el.id}
                        id={el.id}
                      >
                        Удалить
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td />
                  <td />
                </tr>
              )}
            </tbody>
          </table>
          <div style={{ width: '30%' }}>
            <p className="newFeedback" />
            <form id="deliveryForm" style={{ display: 'none' }}>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Cтоимость заказа
                </label>
                <input
                  name="order_price"
                  type="text"
                  className="form-control"
                  id="exampleInputDelivery1"
                  placeholder="Введите стоимость заказа"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Стоимость доставки
                </label>
                <input
                  name="delivery_price"
                  type="text"
                  className="form-control"
                  id="exampleInputDelivery2"
                  placeholder="Введите стоимость доставки"
                />
              </div>

              <button type="submit" className="btn btn-primary addFormBtn">
                Отправить
              </button>
              <button type="submit" className="btn btn-primary closeFormBtn">
                Закрыть форму
              </button>
            </form>
          </div>
        </div>
        <div className="addBtn">
          <button id="newDelivery" className="btn btn-light" type="submit">
            Добавить
          </button>
        </div>
      </div>
    </Layout>
  );
};
