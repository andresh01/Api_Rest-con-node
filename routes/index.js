const productRouter = require("./products.router");

function routerApi(app){
  app.use("/api/v1/products",productRouter); //use?
}

module.exports = routerApi;
