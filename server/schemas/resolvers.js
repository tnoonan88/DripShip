const { User, Product, Order } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
    user: async (parent, { email }) => {
      return User.findOne({ email }).populate("orders");
    },
    products: async () => {
      return Product.find({});
    },
    product: async (parent, { name }) => {
      return Product.findOne({ name });
    },
    orders: async () => {
      return Order.find({});
    },
    order: async (parent, { email }) => {
      return Order.find({ user_email: email });
    },
  },
  Mutation: {
    addOrder: async (parent, args, context) => {
      const newOrder = await Order.create(args);

      await User.findOneAndUpdate({ email: newOrder.user_email }, { $addToSet: { orders: newOrder._id } });

      return newOrder;
    },
    addUser: async (parent, { firstname, lastname, email, password, admin }) => {
      const user = await User.create({ firstname, lastname, email, password, admin });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    // addOrder: async (parent, { name, user_email }) => {
    //   const order = await Order.create({ name, user_email });

    //   await User.findOneAndUpdate({ email: user_email }, { $addToSet: { orders: order._id } });

    //   return order;
    // },
    // loginUser: async (parent, { email, password }) => {
    //   const user = await User.findOne({ email });

    //   if (!user) {
    //     throw new AuthenticationError("No user found with this email address");
    //   }

    //   const correctPw = await user.isCorrectPassword(password);

    //   if (!correctPw) {
    //     throw new AuthenticationError("Incorrect credentials");
    //   }

    //   const token = signToken(user);

    //   return { token, user };
    // },
  },
};
// fix me

module.exports = resolvers;
