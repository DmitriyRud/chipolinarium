const multer = require('multer');
const accountPanelRouter = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');

const AccountPanel = require('../views/AccountPanel');

const { Category } = require('../../db/models');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public/image/categories/');
  },
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});
// const upload = multer({ dest: 'public/image/categories/' });
const upload = multer({ storage });

accountPanelRouter.get('/', async (req, res) => {
  const categories = await Category.findAll({ raw: true });
  renderTemplate(AccountPanel, { categories }, res);
});

accountPanelRouter.post('/', upload.fields([{ name: 'photo', maxCount: 1 }]), async (req, res) => {
  console.log('=============', req.files.photo[0].originalname);
  const image = req.files.photo[0].originalname;
  console.log('YYYYYYYYYYY', req.body);
  // const img = req.file.filename;
  const { title } = req.body;

  const newCategory = await Category.create({
    title,
    image: `/image/categories/${image}`,
  });
  res.sendStatus(200);
});

module.exports = accountPanelRouter;
