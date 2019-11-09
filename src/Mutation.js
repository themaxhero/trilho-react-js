import gql from "graphql-tag";

export const MOVE_CARD = gql`
  mutation move!Card($cardId: Int!, $listId: Int!, $direction: String!){
    list {
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
`;