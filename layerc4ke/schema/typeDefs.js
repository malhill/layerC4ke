import { gql } from '@apollo/client';

const typeDefs = gql`
    type Product {
        _id: ID
        name: String
        category: String
        image: String
        price: Int
    }

    type User {
        _id: ID
        username: String
        email: String
        password: String
    }

    type Query {
        getProducts: [Product]
        getUsers: [User]
    }

    type Mutation {
        addProduct(name: String!, category: String!, image: String!, price: Int!): Product
        addUser(username: String!, email: String!, password: String!): User
    }
`;

export default typeDefs;