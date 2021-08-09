const PORT = 2021;
const express = require('express');
const cors = require('cors');
const app = express();
const mongoDBClient = require('./mongoClient');
const Product = require('./models/product');
const schema = require('./schemas/schema');

const { graphqlHTTP } = require('express-graphql');
app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
app.listen(PORT, () => {
  console.log(`Server up & run on http://localhost:${PORT} 🎉`);
  mongoDBClient.init();
});

// app.get('/products', async (request, response) => {
//   const products = await Product.find({});
//   try {
//     response.status(200).send(products);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
// app.get('/products/:category', async (request, response) => {
//   const category = request.params.category;
//   const products = await Product.find({ category: category });
//   try {
//     response.status(200).send(products);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
