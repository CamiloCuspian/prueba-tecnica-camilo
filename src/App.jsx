import { ProductProvider } from "./context/ProductContext";
import Layout from "./components/Layout/Layout";
import ProductForm from "./components/Products/ProductForm";
import ProductList from "./components/Products/ProductList";

function App() {
  return (
    <ProductProvider>
      <Layout>
        <div className="max-w-6xl mx-auto">
          <section className="mb-20">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-serif font-medium text-gray-800 mb-6">
                Gestión de Productos
              </h1>
              <p className="text-xl text-gray-600 max-w-xl mx-auto">
                Crea, visualiza y gestiona tu inventario de productos de manera
                sencilla y eficiente.
              </p>
            </div>

            <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -top-10 -left-10 w-48 h-48 bg-amber-200 rounded-sm -z-10"></div>
                  <img
                    src="/producto.png"
                    alt="Ilustración de gestión de productos"
                    className="w-full h-auto object-cover rounded-sm shadow-md relative z-10"
                  />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-700 rounded-sm -z-10"></div>
                </div>
              </div>
              <div>
                <ProductForm />
              </div>
            </div>
          </section>
          <section id="products" className="pt-6">
            <ProductList />
          </section>
        </div>
      </Layout>
    </ProductProvider>
  );
}

export default App;
