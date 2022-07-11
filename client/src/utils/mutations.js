import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_HORSE = gql`
  mutation AddHorse(
    $horseName: String!
    $ownerName: String!
    $ownerPhone: String!
    $feed: String!
    $vaccineDate: String!
    $shoeDate: String!
    $barnName: String!
  ) {
    addHorse(
      horseName: $horseName
      ownerName: $ownerName
      ownerPhone: $ownerPhone
      feed: $feed
      vaccineDate: $vaccineDate
      shoeDate: $shoeDate
      barnName: $barnName
    ) {
      horseName
      ownerName
      ownerPhone
      feed
      vaccineDate
      shoeDate
      barnName
    }
  }
`;

export const ADD_SCHEDULE = gql`
  mutation AddSchedule(
    $visitDay: String!
    $visitMonth: String!
    $visitYear: String!
    $visitReason: String!
    $horseName: String!
    $ownerName: String!
  ) {
    addSchedule(
      visitDay: $visitDay
      visitMonth: $visitMonth
      visitYear: $visitYear
      visitReason: $visitReason
      horseName: $horseName
      ownerName: $ownerName
    ) {
      visitDay
      visitMonth
      visitYear
      visitReason
      horseName
      ownerName
      createdAt
    }
  }
`;
