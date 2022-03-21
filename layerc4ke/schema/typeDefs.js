import { gql } from "@apollo/client";

const typeDefs = gql`
  type Product {
    _id: ID
    name: String
    category: String
    image: String
    price: Int
    description: String
    sizes: [String!]
  }

  type Cart {
    _id: ID
    productName: String
    productPrice: Int
    productImage: String
    productQuantity: Int
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    cart: [Cart!]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    getProducts: [Product]
    getProductById(_id: ID!): Product
    getUsers: [User]
  }

  type Mutation {
    addProduct(
      name: String!
      category: String!
      image: String!
      price: Int!
      description: String!
      sizes: [String!]
    ): Product

    addToCart(
      productName: String!
      productPrice: Int!
      productImage: String
      productQuantity: Int!
    ): Cart

    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

export default typeDefs;
