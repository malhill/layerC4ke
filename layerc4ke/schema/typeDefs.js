import { gql } from '@apollo/client';

const typeDefs = gql`
    type Product {
        _id: ID
        name: String
        category: String
        image: String
        price: Int
    }

    type Query {
        getProducts: [Product]
    }

    type Mutation {
        addProduct(name: String!, category: String!, image: String!, price: Int!): Product
    }
`;

export default typeDefs;