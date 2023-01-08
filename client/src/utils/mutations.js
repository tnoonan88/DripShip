import { gql } from "@apollo/client";

// export const CREATE_ORDER = gql`
//   mutation createOrder($product_id: String!, $user_id: String!) {
//     createOrder(product_id: $product_id, user_id: $user_id) {
//       _id
//       product_id
//       user_id
//     }
//   }
// `;

export const CREATE_PRODUCT = gql`
  mutation createProduct($name: String!, $stock: Int, $price: Int) {
    createProduct(name: $name, stock: $stock, price: $price) {
      _id
      name
      stock
      price
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstname
        lastname
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstname: String!, $lastname: String!, $email: String!, $password: String!, $admin: Boolean!) {
    addUser(firstname: $firstname, lastname: $lastname, email: $email, password: $password, admin: $admin) {
      token
      user {
        _id
        firstname
        lastname
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($user_email: String!, $date: String, $shipTo: String, $paymentMethod: String, $amount: Float) {
    addOrder(user_email: $user_email, date: $date, shipTo: $shipTo, PaymentMethod: $paymentMethod, amount: $amount) {
      _id
      user_email
      date
      shipTo
      PaymentMethod
      amount
    }
  }
`;
