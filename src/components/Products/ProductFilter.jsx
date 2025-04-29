// ProductFilter.jsx
import { Input } from '../UI/Input';
import { Select } from '../UI/Select';
import { useProductContext } from '../../context/ProductContext';

const ProductFilter = () => {
  const { searchTerm, updateSearchTerm, sortOption, updateSortOption } = useProductContext();

  const handleSearchChange = (e) => {
    updateSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    updateSortOption(e.target.value);
  };

  const sortOptions = [
    { value: 'creacion', label: 'Fecha de creación' },
    { value: 'nombre', label: 'Nombre' },
    { value: 'codigo', label: 'Código' },
    { value: 'cantidad', label: 'Cantidad' }
  ];

  return (
    <div className="flex flex-col gap-4 mb-6 md:flex-row md:items-end">
      <Input
        label="Buscar por nombre"
        id="search"
        value={searchTerm}
        onChange={handleSearchChange}
        className="flex-1 mb-0"
      />
      
      <Select
        label="Ordenar por"
        id="sort"
        options={sortOptions}
        value={sortOption}
        onChange={handleSortChange}
        className="w-full md:w-48 mb-0"
      />
    </div>
  );
};


export default ProductFilter;
