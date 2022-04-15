import Product from "../models/Product";
import User from "../models/User";
import CartItem from "../models/CartItem";
const { signToken } = require("../lib/auth");
const { AuthenticationError } = require("apollo-server-micro");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
        .select("-__v -password")
        .populate({
          path: 'cart',
          populate: {path: 'product'}
        })
        
        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    getProducts: async () => {
      try {
        const products = await Product.find().sort({name: "asc"})
        return products;
      } catch (err) {
        console.log(err);
      }
    },
    getProductById: async (parent, { _id }) => {
      try {
        const product = await Product.findOne({ _id });
        return product;
      } catch (err) {
        console.log(err);
      }
    },
    getUsers: async () => {
      try {
        const users = await User.find().populate("product");
        return users;
      } catch (err) {
        console.log(err);
      }
    },
  },

  Mutation: {
    addProduct: async (parent, args) => {
      const product = await Product.create(args);
      return product;
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    addToCart: async (parent, {product, quantity, size}, context) => {
      if (context.user) {
        await User.updateOne(
          { _id: context.user._id },
          { $push: { cart: {product: product, quantity: quantity, size: size} }},
          { new: true }
        )
      }
    }
  },
};

export default resolvers;
