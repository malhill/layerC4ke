import Product from '../models/Product';

const resolvers = {
    Query: {
        getProducts: async () => {
            try {
                const products = await Product.find({})
                return products
            } catch (err) {
                console.log(err)
            }
        }
    },

    Mutation: {
        addProduct: async (parent, args) => {
            const product = await Product.create(args);
            return product;
        },
    }
};

export default resolvers;