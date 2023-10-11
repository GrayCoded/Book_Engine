import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        username
        email
        password
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation addBook($profileId: ID!, $book: String!) {
    saveBook(profileId: $profileId, book: $book) {
      _id
      image
      link
      title
    }
  }
`;

export const ADD_USER = gql`
  mutation login($email: String!, $password: String!) {
   addUser(email: $email, password: $password) {
      token
      profile {
        _id
        username
        email
        password
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeSkill($book: String!) {
    removeBook(book: $book) {
      _id
      name
      books
    }
  }
`;
