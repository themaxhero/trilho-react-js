import gql from "graphql-tag";

export const GET_BOARD = gql`
  query getBoard($boardId: Int!){
    board(id: $boardId) {
      id,
      name,
      cardLists {
        id,
        name,
        cards {
          id,
          name,
          tags {
            id,
            name,
            color
          }
        }
      }
    }
  }
`;

export const GET_CARD = gql`
  query getCard($cardId: Int!){
    card(id: $cardId){
      id,
      name,
      tags {
        id,
        name,
        color
      }
    }
  }
`;