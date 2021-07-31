import Post from "./components/Post";
import { request } from "./lib/datoCms";
import { HOMEPAGE_QUERY } from "../query/query";
import Head from "next/head";
import { renderMetaTags } from "react-datocms";

export const getStaticProps = async () => {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 },
  });

  return {
    props: {
      data,
    },
  };
};

export default function Home({ data }) {
  const { allPosts, blog, site } = data;

  return (
    <section>
      <Head>
        {renderMetaTags(blog.seo.concat(site.favicon))}
      </Head>
      {allPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
}
