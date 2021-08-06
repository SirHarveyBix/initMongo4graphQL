import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query ($category: String!) {
    products(category: $category) {
      id
      name
      price
      filter
    }
  }
`;
