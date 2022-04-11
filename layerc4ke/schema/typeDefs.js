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
    quantity: Int
  }

  type Cart {
    _id: ID
    products: [Product]
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    cart: [Product]
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
      _id: ID!
    ) : User

    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

export default typeDefs;
