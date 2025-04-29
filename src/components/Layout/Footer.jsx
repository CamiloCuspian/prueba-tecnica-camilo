const Footer = () => {
  return (
    <footer className="py-6 mt-12 bg-gray-100">
      <div className="container px-4 mx-auto">
        <div className="text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Camilo Cuspian. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;