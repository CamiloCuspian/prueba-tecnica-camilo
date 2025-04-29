import { Card, Button } from '../UI';
import { useProductContext } from '../../context/ProductContext';

const ProductItem = ({ product }) => {
  const { deleteProduct, startEditing } = useProductContext();
  
  const formattedDate = new Date(product.creacion).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Card className="bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow border border-amber-100">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-serif font-medium text-gray-800">{product.nombre}</h3>
        <span className="px-3 py-1 text-sm font-medium text-amber-800 bg-amber-100 rounded-sm">
          Código: {product.codigo}
        </span>
      </div>
      
      {/* Mostrar imagen si existe */}
      {product.imagen && (
        <div className="mb-4">
          <img 
            src={product.imagen} 
            alt={product.nombre} 
            className="w-full h-48 object-cover rounded-sm"
          />
        </div>
      )}
      
      <p className="mb-6 text-gray-600">{product.descripcion}</p>
      
      <div className="flex flex-wrap justify-between items-end mt-auto">
        <div>
          <p className="text-sm text-gray-500">Creado: {formattedDate}</p>
          <p className="mt-1 text-lg font-medium text-amber-700">Cantidad: {product.cantidad}</p>
        </div>
        
        <div className="flex gap-2">
          <Button 
            variant="secondary" 
            onClick={() => startEditing(product.codigo)}
            className="mt-2 sm:mt-0"
          >
            Editar
          </Button>
          
          <Button 
            variant="danger" 
            onClick={() => deleteProduct(product.codigo)}
            className="mt-2 sm:mt-0"
          >
            Eliminar
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductItem;