import {gql} from '@apollo/client';

export const GET_COUNTRY = gql`
  query($code: ID!) {
    country(code: $code) {
      code
      phone
      name
      continent {
        code
        name
      }
    }
  }
`;
