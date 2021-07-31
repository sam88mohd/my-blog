import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
