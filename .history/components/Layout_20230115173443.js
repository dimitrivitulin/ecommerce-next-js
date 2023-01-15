import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (

  <div className="min-h-screen flex flex-col justify-between">
    <Header />
    {children}
    <Footer />
  </div>
  )
};

export default Layout;
