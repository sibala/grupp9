const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// GET all products
router.get("/", async (_, res) => {
  try {
    res.json(await Product.find());
  } catch (error) {
    res.json({ message: error });
  }
});

// GET specific product by ID
router.get('/:id', async (req, res) => {
    try {
        res.json(await Product.findById(req.params.id));
    } catch(error) {
        res.json({message: error});
    }
});

module.exports = router;
