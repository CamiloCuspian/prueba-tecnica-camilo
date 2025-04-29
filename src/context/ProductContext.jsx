import { createContext, useContext, useEffect, useState } from 'react';

const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('creacion');
  const [editingProduct, setEditingProduct] = useState(null);

  // Cargar productos desde localStorage al iniciar
  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  // Guardar productos en localStorage cuando cambian
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
    
    // Aplicar filtros y ordenamiento
    let result = [...products];
    
    // Filtrar por nombre si hay término de búsqueda
    if (searchTerm) {
      result = result.filter((product) =>
        product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Ordenar productos según la opción seleccionada
    switch (sortOption) {
      case "nombre":
        result.sort((a, b) => a.nombre.localeCompare(b.nombre));
        break;
      case "codigo":
        result.sort((a, b) => a.codigo - b.codigo);
        break;
      case "cantidad":
        result.sort((a, b) => b.cantidad - a.cantidad);
        break;
      case "creacion":
      default:
        result.sort((a, b) => new Date(b.creacion) - new Date(a.creacion));
        break;
    }
    
    setFilteredProducts(result);
  }, [products, searchTerm, sortOption]);

  // Agregar un nuevo producto
  const addProduct = (product) => {
    const newProduct = {
      ...product,
      creacion: new Date().toISOString(),
      imagen: product.imagen || null // Mantener el campo imagen
    };
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  // Eliminar un producto
  const deleteProduct = (codigo) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.codigo !== codigo)
    );
  };

  // Actualizar término de búsqueda
  const updateSearchTerm = (term) => {
    setSearchTerm(term);
  };

  // Cambiar opción de ordenamiento
  const updateSortOption = (option) => {
    setSortOption(option);
  };
  
  // Comenzar la edición
  const startEditing = (productCode) => {
    const productToEdit = products.find(product => product.codigo === productCode);
    if (productToEdit) {
      setEditingProduct(productToEdit);
      // Hacer scroll al formulario para mejor UX
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  // Cancelar la edición
  const cancelEditing = () => {
    setEditingProduct(null);
  };

  // Actualizar un producto existente
  const updateProduct = (updatedProduct) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.codigo === updatedProduct.codigo ? updatedProduct : product
      )
    );
    setEditingProduct(null); // Salir del modo edición
  };

  const value = {
    products: filteredProducts,
    addProduct,
    deleteProduct,
    searchTerm,
    updateSearchTerm,
    sortOption,
    updateSortOption,
    editingProduct,
    startEditing,
    cancelEditing,
    updateProduct
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};