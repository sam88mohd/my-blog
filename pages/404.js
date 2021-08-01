import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  });
  return (
    <section className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="font-extrabold text-6xl m-4">404</h1>
      <article className="m-4 border-t-2 border-gray-600 p-4 text-xl">
        <p>Oppss.... Your page is not found or not ready yet!</p>
        <p>
          Click <Link href="/"><a className="text-blue-600">here</a></Link> to go back to home
        </p>
      </article>
    </section>
  );
};

export default NotFound;
