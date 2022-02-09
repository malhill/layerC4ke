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

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        getProducts: [Product]
        getUsers: [User]
    }

    type Mutation {
        addProduct(name: String!, category: String!, image: String!, price: Int!): Product
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
    }
`;

export default typeDefs;