import { useState, useEffect } from 'react';
import { useProductContext } from '../../context/ProductContext';
import { Button, Input, TextArea } from '../UI';

const ProductForm = () => {
  const { addProduct, editingProduct, updateProduct, cancelEditing } = useProductContext();
  const [formData, setFormData] = useState({
    codigo: '',
    nombre: '',
    descripcion: '',
    cantidad: '',
    imagen: null
  });
  const [previewImage, setPreviewImage] = useState(null);

  // Cargar datos del producto cuando se está editando
  useEffect(() => {
    if (editingProduct) {
      setFormData({
        codigo: editingProduct.codigo,
        nombre: editingProduct.nombre,
        descripcion: editingProduct.descripcion,
        cantidad: editingProduct.cantidad,
        imagen: editingProduct.imagen || null
      });
      setPreviewImage(editingProduct.imagen);
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: id === 'codigo' || id === 'cantidad' ? parseInt(value, 10) || '' : value
    }));
  };

  // Función para manejar la carga de imágenes
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setFormData(prevState => ({
          ...prevState,
          imagen: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar que todos los campos estén completos
    if (!formData.codigo || !formData.nombre || !formData.descripcion || !formData.cantidad) {
      alert('Por favor completa todos los campos obligatorios');
      return;
    }
    
    if (editingProduct) {
      // Si estamos editando, mantener la fecha de creación original
      updateProduct({
        ...formData,
        creacion: editingProduct.creacion
      });
    } else {
      // Si estamos creando un nuevo producto
      addProduct(formData);
    }
    
    // Limpiar el formulario
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      codigo: '',
      nombre: '',
      descripcion: '',
      cantidad: '',
      imagen: null
    });
    setPreviewImage(null);
  };

  const handleCancel = () => {
    resetForm();
    cancelEditing();
  };

  return (
    <div className="bg-amber-50 p-8 rounded-md shadow-sm">
      <h2 className="mb-8 text-3xl font-serif font-medium text-gray-800 border-b border-amber-200 pb-4">
        {editingProduct ? 'Editar Producto' : 'Crear Producto'}
      </h2>
      
      <form onSubmit={handleSubmit}>
        <Input
          label="Código"
          id="codigo"
          type="number"
          value={formData.codigo}
          onChange={handleChange}
          required
          disabled={editingProduct} // No permitir editar el código
          className="mb-6"
        />
        
        <Input
          label="Nombre"
          id="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          className="mb-6"
        />
        
        <TextArea
          label="Descripción"
          id="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          required
          className="mb-6"
        />
        
        <Input
          label="Cantidad"
          id="cantidad"
          type="number"
          value={formData.cantidad}
          onChange={handleChange}
          required
          className="mb-6"
        />
        
        {/* Campo para cargar imagen */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Imagen del producto (opcional)
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-4 py-3 border border-amber-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white"
          />
          
          {/* Vista previa de la imagen */}
          {previewImage && (
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">Vista previa:</p>
              <img 
                src={previewImage} 
                alt="Vista previa" 
                className="w-32 h-32 object-cover border border-gray-200 rounded-sm"
              />
            </div>
          )}
        </div>
        
        <div className="flex gap-4">
          <Button type="submit" className="flex-1 py-3 text-lg">
            {editingProduct ? 'Actualizar Producto' : 'Crear Producto'}
          </Button>
          
          {editingProduct && (
            <Button 
              type="button" 
              variant="secondary" 
              onClick={handleCancel}
              className="flex-1 py-3 text-lg"
            >
              Cancelar
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ProductForm;