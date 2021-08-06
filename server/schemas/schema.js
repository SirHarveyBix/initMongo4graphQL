const graphql = require('graphql');
const Product = require('../models/product');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLSchema,
  GraphQLList,
} = graphql;

const ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    category: { type: GraphQLString },
    filter: { type: GraphQLString },
    price: { type: GraphQLFloat },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    hello: {
      //test
      type: GraphQLString,
      resolve() {
        return 'GraphQL Launched 🚀';
      },
    },
    products: {
      type: GraphQLList(ProductType),
      resolve(parent, args) {
        return Product.find({});
      },
    },
    products: {
      type: new GraphQLList(ProductType),
      args: { category: { type: GraphQLString } },
      resolve(parent, args) {
        return Product.find({ category: args.category });
      },
    },
  },
});
// a creuser : Category Variable
const schema = new GraphQLSchema({
  query: RootQuery,
});

module.exports = schema;
