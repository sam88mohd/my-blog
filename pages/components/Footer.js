import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="bg-gray-200">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2021 Copyright:
            <a className="text-gray-600 ml-1" target="_blank">
              Samsudin Mohamad
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a href="" className="text-gray-500">
              <FaFacebookF />
            </a>
            <a href="" className="ml-3 text-gray-500">
              <FaTwitter />
            </a>
            <a href="" className="ml-3 text-gray-500">
              <FaLinkedinIn />
            </a>
            <a href="" className="ml-3 text-gray-500">
              <FaYoutube />
            </a>
            <a href="" className="ml-3 text-gray-500">
              <FaInstagram />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
