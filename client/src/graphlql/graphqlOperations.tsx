import { gql } from '@apollo/client';

export const CONTENT_QUERY = gql`
  query GetContent($path: String!) {
    content(path: $path) {
      name
      isDirectory
      extension
      path
    }
  }
`;