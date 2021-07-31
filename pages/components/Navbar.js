import { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { SEOContext } from "./context/SEOContext";

const Navbar = () => {
  const menu = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const { title } = useContext(SEOContext);

  const onClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (menu.current !== null && !menu.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => window.removeEventListener("click", pageClickEvent);
  }, [isActive]);

  return (
    <header>
      <Head>
        <title>{title}</title>
      </Head>
      <nav className="bg-white shadow">
        <div className="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/">
                <a className="text-xl font-bold text-gray-800 md:text-2xl hover:text-gray-700">
                  MY BLOG
                </a>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="toggle menu"
                onClick={onClick}
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div
            ref={menu}
            className={
              isActive
                ? "flex items-center flex-col md:flex md:flex-row md:mx-6"
                : "hidden items-center flex-col md:flex md:flex-row md:mx-6"
            }
          >
            <Link href="/">
              <a className="my-1 text-gray-700 md:mx-4 md:my-0">Home</a>
            </Link>
            <Link href="/post">
              <a className="my-1 text-gray-700 md:mx-4 md:my-0">Next Post</a>
            </Link>
            <Link href="/share">
              <a className="my-1 text-gray-700 md:mx-4 md:my-0">Share</a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
