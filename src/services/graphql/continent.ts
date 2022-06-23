import {gql} from '@apollo/client';

export const GET_COUNTINENT = gql`
  query($code: ID!) {
    continent(code: $code) {
      code
      name
      countries {
        name
        code
      }
    }
  }
`;
