const React = require('react');

const Layout = require('./Layout');

module.exports = function AccountPanel({ categories, feedbacks }) {
  return (
    <Layout categories={categories}>
      <link rel="stylesheet" href="/css/account.css" />
      <script defer src="/js/accountPanel.js" />
      <div className="account_admin_container">
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
