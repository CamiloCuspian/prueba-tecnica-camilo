// ProductList.jsx
import ProductItem from './ProductItem';
import ProductFilter from './ProductFilter';
import { useProductContext } from '../../context/ProductContext';

const ProductList = () => {
  const { products } = useProductContext();

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="mb-6 text-3xl font-serif font-medium text-gray-800">Lista de Productos</h2>
      
      <ProductFilter />
      
      {products.length === 0 ? (
        <div className="p-8 text-center bg-gray-50 rounded-md">
          <p className="text-gray-500">No hay productos disponibles.</p>
          <p className="mt-1 text-gray-500">¡Crea uno nuevo para comenzar!</p>
        </div>
      ) : (
        products.map(product => (
          <ProductItem key={product.codigo} product={product} />
        ))
      )}
    </div>
  );
};

export default ProductList;
export { ProductFilter, ProductItem };