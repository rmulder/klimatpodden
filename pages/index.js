import React from "react";
import Head from "../components/head";
import PostList from "../components/PostList";
import { getPosts } from "../cms/lib/api";

const Home = ({ posts, currentPage, totalPages }) => {
  return (
    <>
      <Head title="Family Health Services" />

      <PostList
        posts={posts}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </>
  );
};

export async function getStaticProps() {
  const page = 1;
  const { posts, totalPages } = await getPosts(page);

  return {
    props: {
      posts,
      totalPages,
      currentPage: page,
    },
  };
}

export default Home;
