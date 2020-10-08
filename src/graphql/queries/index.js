import { gql } from "@apollo/client";

export const GET_COLLECTION = gql`
  query GetCollection {
    objects {
      id
      post_title
      post_content
      post_thumbnail
      dimensions
      materials
      medium
      onview
      date
      artist
      available_collection_online
      gift_information
      caption
      ica_miami_collection
    }
  }
`;

export const ARTWORK_QUERY = {
  query: gql`
    query GetCollection {
      objects {
        id
        post_title
        post_content
        post_thumbnail
        dimensions
        materials
        medium
        onview
        date
        artist
        available_collection_online
        gift_information
        caption
        ica_miami_collection
      }
    }
  `,
};
