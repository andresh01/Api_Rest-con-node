const express = require("express");
const routerApi = require("./routes")

const app = express();
const port = 8000;

const fs = require("fs");
const path = require("path");

app.use(express.json());



routerApi(app);

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
