const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    firstname: String!
    lastname: String!
    email: String!
    password: String!
    admin: Boolean!
    orders: [Order]!
  }

  type Product {
    _id: ID!
    name: String!
    stock: Int
    price: Int
    image: String
  }

  type Order {
    _id: ID!
    user_email: String!
    date: String
    shipTo: String
    PaymentMethod: String
    amount: Float
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(email: String!): User
    products: [Product]
    product(name: String!): Product
    orders: [Order]
    order(email: String!): [Order]
  }

  type Mutation {
    createOrder(product_id: ID!, user_id: ID!): Order
    addUser(firstname: String!, lastname: String!, email: String!, password: String!, admin: Boolean!): Auth
    login(email: String!, password: String!): Auth
    addOrder(user_email: String!, date: String, shipTo: String, PaymentMethod: String, amount: Float): Order
  }
`;

module.exports = typeDefs;
