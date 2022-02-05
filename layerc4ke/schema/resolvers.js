import Product from '../models/Product';
import User from '../models/User';

const resolvers = {
    Query: {
        getProducts: async () => {
            try {
                const products = await Product.find({})
                return products
            } catch (err) {
                console.log(err)
            }
        },
        getUsers: async () => {
            try {
                const users = await User.find({})
                return users
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
        addUser: async (parent, args) => {
            const user = await User.create(args);
            return user
        }
    }
};

export default resolvers;