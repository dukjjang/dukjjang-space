'use client'

import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";

const getPosts = () => {
  const query = groq`
  *[_type=='post'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

  let posts;
  client
    .fetch(query)
    .then((res) => )
    .then((data) => console.log(data));

  return posts;
};


getPosts()
