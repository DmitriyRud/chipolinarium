const modalRouter = require('express').Router();

const { priceRequest } = require('../../db/models');

modalRouter.post('/', async (req, res) => {
  const { name, phone, email } = req.body;
  try {
    const newRequest = await priceRequest.create({
      name,
      phone,
      email,
    });
  } catch (err) {
    console.error(err);
  }
});

module.exports = modalRouter;
