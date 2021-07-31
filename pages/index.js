import { useContext, useEffect } from "react";
import { SEOContext } from "./components/context/SEOContext";
import Post from "./components/Post";
import { request } from "./lib/datoCms";
import { HOMEPAGE_QUERY } from "../query/query";

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
  console.log(data);

  const { handleSetTitle } = useContext(SEOContext);
  useEffect(() => {
    handleSetTitle(data.blog.seo.title);
  }, []);

  return (
    <section>
      {data.allPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
}
