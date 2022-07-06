import { gql } from '@apollo/client';
export const QUERY_ME = gql`

query Query {
  me {
    _id
    username
    email
    password
  }
}

`
export const QUERY_USERS = gql`

query Users {
  Users {
    _id
    username
    email
    password
  }
}

`

export const QUERY_USER = gql`

query Users($username: String!) {
  User(username: $username) {
    _id
    username
    email
    password
  }
}


`

export const QUERY_HORSES_OWNERNAME = gql`

query Horses($ownerName: String!) {
  Horses(ownerName: $ownerName) {
    _id
    name
    ownerName
    ownerPhone
    feed
    vaccineDate
    shoeDate
    barnName
  }
}
`;

export const QUERY_HORSES_VISITREASON = gql`

query Query($visitReason: String) {
  HorseDate(visitReason: $visitReason) {
    _id
    name
    ownerName
    ownerPhone
    feed
    vaccineDate
    shoeDate
    barnName
  }
}


`

export const QUERY_HORSE_ID = gql`

query Query($id: ID!) {
  Horse(_id: $id) {
    _id
    name
    ownerName
    ownerPhone
    feed
    vaccineDate
    shoeDate
    barnName
  }
}

`

export const QUERY_SCHEDULE = gql`

query Schedule {
  Schedule {
    _id
    visitDay
    visitMonth
    visitYear
    visitReason
    horseName
    ownerName
    
  }
}


`

export const QUERY_OWNER_SCHEDULE = gql`

query OwnerSchedule($ownerName: String) {
  OwnerSchedule(ownerName: $ownerName) {
    _id
    visitDay
    visitMonth
    visitYear
    visitReason
    horseName
    ownerName
    createdAt
  }
}

`

export const QUERY_HORSE_SCHEDULE = gql`

query OwnerSchedule($horseName: String) {
  HorseSchedule(horseName: $horseName) {
    _id
    visitDay
    visitMonth
    visitYear
    visitReason
    horseName
    ownerName
    createdAt
  }
}

`