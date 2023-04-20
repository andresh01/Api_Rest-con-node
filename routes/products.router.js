const express = require("express");
const path = require("path");
const fs = require("fs");

const router = express.Router();

router.get('/', async (req, res) => {
  const filePath = path.resolve(`/Users/admin/Documents/repositorieswwcode/Api_Rest_node/products.txt`);
  const data = await fs.promises.readFile(filePath, 'utf-8')
  const dataJson = JSON.parse(data);
  res.status(200).json(dataJson);
  console.table(dataJson);

})

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const filePath = path.resolve(`/Users/admin/Documents/repositorieswwcode/Api_Rest_node/products.txt`);
  const data = await fs.promises.readFile(filePath, 'utf-8')
  const dataJson = JSON.parse(data);
  const findProduct = dataJson.find(obj => obj.id == id)

  if (findProduct) {
    res.status(200).json(findProduct);
    console.table(findProduct)
  } else {
    res.status(404).json("Product not Found");
  }

})

router.post('/', (req, res) => {
  res.status(200).json();
})

router.delete('/:id', (req, res) => {
  res.status(200).json();
})

router.patch('/:id', (req, res) => {
  res.status(200).json();
})

module.exports = router;
