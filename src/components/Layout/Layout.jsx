import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <main className="flex-grow container px-4 py-8 mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
export { Header, Footer };