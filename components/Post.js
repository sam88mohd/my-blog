import { Image } from "react-datocms";
import Link from "next/link";

const Post = ({ post }) => {
  return (
    <article className="w-full text-gray-700 bg-gray-100 flex justify-center items-center py-8 px-6">
      <div>
        <figure>
          <Image data={post.coverImage.responsiveImage} alt={post.title}/>
        </figure>
        <h3 className="text-blue-600 font-bold">#{post.category.name}</h3>
        <section className="flex">
          <section className="w-3/5 py-4">
            <h2 className="md:text-xl h-full font-extrabold pr-4 pb-4 border-b-2 border-gray-600">
              {post.title}
            </h2>
          </section>
          <section className="w-full flex flex-col justify-between">
            <article className="bg-red-400 text-center py-4 ml-8">
              <Link href={`/post/${post.slug}`}>
                <a className="font-extrabold text-gray-600 text-xl hover:text-gray-800">
                  Read
                </a>
              </Link>
            </article>

            <article className="p-4 w-full flex flex-col items-end">
              <h4 className="font-thin italic text-sm">{post.date}</h4>
              <h5>by {post.author.name}</h5>
            </article>
          </section>
        </section>
      </div>
    </article>
  );
};

export default Post;
