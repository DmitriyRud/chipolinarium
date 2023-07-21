const React = require('react');

const Layout = require('./Layout');

module.exports = function AccountPanel({ categories, feedbacks }) {
  return (
    <Layout categories={categories}>
      <link rel="stylesheet" href="/css/account.css" />
      <script defer src="/js/accountPanel.js" />
      <script defer src="/js/managerEmail.js" />

      <div className="account_admin_container">
        <div className="Manager_container">
          <form method="POST" className="manager_form">
            <h3> Добавить менеджера для рассылки запросов </h3>
            <p className="manager_message"></p>
            <label>Введите email менеджера</label>
            <input className="form-control" name="managerEmail" />
            <button className="btn send-managerEmail-btn" type="submit">
              Отправить
            </button>
          </form>
        </div>

        <div className="update-container">
          <div className="logout-container">
            <button className="btn" type="button">
              <a
                href="/accountPanel/logout"
                className="btn logout-btn btn-danger"
              >
                Выйти из аккаунта
              </a>
            </button>
          </div>
          <button className="btn updateAdmin-btn btn-primary" type="button">
            Обновить данные администратора
          </button>
          <p className="message1" />
          <form action="#" method="POST" className="update-form">
            <label>Введите старый email</label>
            <input className="form-control" name="oldEmail" />
            <label>Введите старый пароль</label>
            <input className="form-control" name="oldPassword" />
            <label>Введите новый email</label>
            <input className="form-control" name="newEmail" />
            <label>Введите новый пароль</label>
            <input className="form-control" name="newPassword1" />
            <label>Подтвердите новый пароль</label>
            <input className="form-control" name="newPassword2" />
            <label>Введите 16-значный код, сгенерированный Google</label>
            <input className="form-control" name="code" />
            <button className="btn send-update-btn" type="submit">
              Отправить
            </button>
            <button className="btn close-update-btn" type="button">
              Закрыть
            </button>
          </form>
        </div>
        <div className="category_create_container">
          <h2> Форма для создания категории </h2>

          <h3> Создание категории </h3>
          <p className="createCategory" />

          <form
            id="newCategory"
            encType="multipart/form-data"
            name="newCategory"
          >
            <div className="input_photo">
              <label htmlFor="pic_input">Выберите фото для категории:</label>
              <input
                id="pic_input"
                type="file"
                name="photo"
                className="form-control"
              />
            </div>
            <div className="input_title">
              <label htmlFor="pic_input">Название: </label>
              <input
                id="titleCategory"
                type="text"
                name="title"
                className="form-control"
              />
            </div>
            <label htmlFor="pic_input">Описание категории</label>
            <input
              id="bodyCategory"
              type="text"
              name="description"
              className="form-control"
            />
            <div className="create_category_btn">
              <button type="submit" className="btn btn-primary">
                Отправить
              </button>
            </div>
          </form>
        </div>

        <div className="create_item_container">
          <h3> Создание товара </h3>

          <p className="createItem" />

          <form id="newItem" encType="multipart/form-data" name="newItem">
            <label htmlFor="pic_input">Категория товара</label>
            <select name="categoryName" id="" className="form-control">
              {categories.length ? (
                categories.map((category) => (
                  <option value={category.title}>{category.title}</option>
                ))
              ) : (
                <span> </span>
              )}
            </select>

            <label htmlFor="pic_input">Фото</label>
            <input
              id="pic_input"
              type="file"
              name="photoItem"
              className="form-control"
            />

            <label htmlFor="pic_input">Название</label>
            <input
              id="titleItem"
              type="text"
              name="name"
              className="form-control"
            />

            <label htmlFor="pic_input">Описание товара</label>
            <input
              id="titleCategory"
              type="text"
              name="description"
              className="form-control"
            />

            <button type="submit" className="btn btn-primary">
              Отправить
            </button>
          </form>
        </div>

        <div className="flex_feedback">
          <div className="moderate_feedback_container">
            <h2> Отзывы клиентов для модерации </h2>

            <div className="card card_feedback">
              <p className="approved_feedback" />
              {feedbacks.length ? (
                feedbacks.map((feedback) => (
                  <div
                    id={`card-${feedback.id}`}
                    className="card_container_feedback"
                  >
                    <div className="card-body" key={feedback.id}>
                      <h5 className="card-title">{feedback.name}</h5>
                      <p className="card-text">{feedback.body}</p>
                    </div>
                    <div>
                      <div>
                        <button
                          id={feedback.id}
                          type="button"
                          className="btn btn-warning approved"
                        >
                          Отзыв прошёл
                        </button>
                        <button
                          id={feedback.id}
                          type="button"
                          className="btn btn-warning deleteFeedback"
                        >
                          Удалить отзыв
                        </button>
                        <button
                          id={feedback.id}
                          type="button"
                          className="btn btn-warning editFeedback"
                        >
                          Изменить отзыв
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <span> Отзывов пока нет</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
