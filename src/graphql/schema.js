import { gql } from "@apollo/client";

export const typeDefs = `
  type Artwork {
    id: ID!
    post_title: String!
    post_content: String
    post_thumbnail: String!
    dimensions: String
    materials: String
    medium: String
    onview: String
    date: String
    artist: String
    available_collection_online: String
    gift_information: String
    caption: String
    ica_miami_collection: String
  }

  type Query {
    artworks: [artwork]
  }
`;
