import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query Users {
    users {
      _id
      firstname
      lastname
      email
      admin
      orders
    }
  }
`;

export const QUERY_USER = gql`
  query User($email: String!) {
    user(email: $email) {
      _id
      firstname
      lastname
      email
      password
      admin
      orders
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query Products {
    products {
      _id
      name
      stock
      price
      image
    }
  }
`;

export const QUERY_PRODUCT = gql`
  query Product($name: String!) {
    product(name: $name) {
      _id
      name
      stock
      price
      image
    }
  }
`;

export const QUERY_ORDERS = gql`
  query Orders {
    orders {
      _id
      user_email
      date
      shipTo
      PaymentMethod
      amount
    }
  }
`;

export const QUERY_USER_ORDERS = gql`
  query Order($email: String!) {
    order(email: $email) {
      _id
      user_email
      date
      shipTo
      PaymentMethod
      amount
    }
  }
`;
