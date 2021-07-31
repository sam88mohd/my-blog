import { request } from "../lib/datoCms";
import { HOMEPAGE_QUERY, POST } from "../../query/query";
import { StructuredText } from "react-datocms";

export const getStaticPaths = async () => {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 },
  });

  const paths = data.allPosts.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params.slug;

  const { post } = await request({
    query: POST,
    variables: { slug: slug },
  });

  return {
    props: {
      post,
    },
  };
};

const PostDetails = ({ post }) => {
  return (
    <section className="bg-gray-100">
      <section className="p-4 w-4/5 m-auto text-gray-700">
        <h1 className="p-4 font-bold text-3xl">{post.title}</h1>
        <hr />
        <section className="p-4 ">
          <StructuredText
            data={post.content}
            renderBlock={({ record }) => {
              switch (record.__typename) {
                case "ImageBlockRecord":
                  return (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={record.image.url}
                      style={{ width: 600, height: 300 }}
                      alt={record.image.alt}
                    />
                  );
                default:
                  return null;
              }
            }}
          />
        </section>
      </section>
    </section>
  );
};

export default PostDetails;
