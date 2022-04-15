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
    stock: Int
    stripeTestId: String
  }

  type CartItem {
    product: Product
    quantity: Int
    size: String
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    cart: [CartItem]
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

    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addToCart(product: ID!, quantity: Int!, size: String): User
  }
`;

export default typeDefs;
