import Header from "./Header";
import Footer from "./Footer";

/**
 * @author traj3ctory
 * @function Layout
 **/

const Layout = ({ children }) => {
  return (
    <>
      <div className="wrapper overlay">
        <Header />
        <div className="container">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
