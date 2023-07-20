const modalRouter = require('express').Router();
const nodemailer = require('nodemailer');

const { priceRequest } = require('../../db/models');

const transporter = nodemailer.createTransport({
  port: 465,
  host: 'smtp.gmail.com',
  // service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  secure: true, // upgrades later with STARTTLS -- change this based on the PORT
});

modalRouter.post('/', async (req, res) => {
  const { name, phone, email } = req.body;
  const mailData = {
    from: 'nikolina.elizavet@gmail.com',
    to: 'nikolina.elizavet@gmail.com',
    subject: 'Запрос прайса',
    text: ' ',

    html: `<b> Посетитель сайта ${name} запросил актуальные цены. </b><br> Информацию ему необходимо выслать на почту ${email}. Для уточнения данных пользователь оставил номер телефона: ${phone} <br/> `,
  };

  transporter.sendMail(mailData, (error, info) => {
    if (error) {
      return console.log('==========', error);
    }
    res.status(200).send({ message: 'Mail send', message_id: info.messageId });
  });

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
