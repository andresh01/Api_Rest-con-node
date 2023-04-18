const express = require("express");
const app = express();
const port = 8000;

const fs = require("fs");
const path = require("path");

app.use(express.json());


app.get('/api/v1/products', async (req, res) => {
  try {
    const filePath = path.resolve(`${__dirname}/products.txt`);
  const data = await fs.promises.readFile(filePath, 'utf-8');
  const dataJson = JSON.parse(data);
  res.status(200).json(dataJson);
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }

})

app.get('/api/v1/products/id', async (req, res) => {
  const filePath = path.resolve(`${__dirname}/products1.txt`);
  const data = await fs.promises.readFile(filePath, 'utf-8');
  const dataJson = JSON.parse(data);
  res.status(200).json(dataJson);
})

app.post('/api/v1/products', (req, res) => {
  res.status(200).json();
})

app.delete('/api/v1/products:id', (req, res) => {
  res.status(200).json();
})

app.patch('/api/v1/products:id', (req, res) => {
  res.status(200).json();
})


/* async function readFile() {
  try {
    const filePath = path.resolve(`${__dirname}/products.txt`);
    const data = await fs.promises.readFile(filePath, 'utf-8')
    console.table(data);
    return JSON.parse(data);
  } catch (error) {
    console.log(error)
  }

} */

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
