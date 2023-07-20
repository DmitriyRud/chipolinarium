const router = require("express").Router();
const renderTemplate = require("../lib/renderTemplate");
const Items = require("../views/Items");
const Catalog = require("../views/Catalog");
const AllItems = require("../views/AllItems");

const { Category, Item } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const { email } = req.session;
    const categories = await Category.findAll({
      raw: true,
    });
    renderTemplate(Catalog, { categories, email }, res);
  } catch (err) {
    console.error(err);
  }
});

router.get("/items", async (req, res) => {
  try {
    const { email } = req.session;
    const categories = await Category.findAll({ raw: true });
    const items = await Item.findAll({ raw: true });
    renderTemplate(AllItems, { categories, items, email }, res);
  } catch (err) {
    console.error(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { email } = req.session;
    const { id } = req.params;
    const categories = await Category.findAll({ raw: true });
    const items = await Item.findAll({ where: { category_id: id }, raw: true });
    renderTemplate(Items, { categories, items, email }, res);
  } catch (err) {
    console.error(err);
  }
});
router.delete("/item/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Item.destroy({ where: { id } });
    res.json({ msg: "success" });
  } catch (error) {
    console.log("ERRor");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Category.destroy({ where: { id: req.params.id }, include: Item });
    res.json({ msg: "success" });
  } catch (error) {
    console.log(error);
  }
}); 

module.exports = router;
