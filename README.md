# ProductManager - Aplicación de Gestión de Productos

Una aplicación para gestionar productos desarrollada con React, Context API y TailwindCSS.

## Características

- Crear nuevos productos
- Visualizar lista de productos
- Eliminar productos
- Ordenar productos por diferentes criterios
- Filtrar productos por nombre
- Persistencia de datos con localStorage

## Tecnologías utilizadas

- React para la interfaz de usuario
- Context API para el manejo de estado
- TailwindCSS para los estilos
- LocalStorage para la persistencia de datos

## Requisitos previos

- Node.js (v14.0.0 o superior)
- npm (v6.0.0 o superior)

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/product-manager.git
   cd product-manager
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia la aplicación en modo desarrollo:
   ```bash
   npm start
   ```

4. Abre [http://localhost:3000](http://localhost:3000) para ver la aplicación en tu navegador.

## Estructura del proyecto

```
src/
├── components/
│   ├── Layout/         # Componentes de estructura de la página
│   ├── Products/       # Componentes relacionados con productos
│   └── UI/             # Componentes de interfaz reutilizables
├── context/            # Context API para manejo de estado global
├── hooks/              # Custom hooks
├── utils/              # Funciones utilitarias
├── App.jsx             # Componente principal
└── index.js            # Punto de entrada
```

## Decisiones técnicas

- **Context API**: Elegí Context API sobre Redux porque la complejidad del estado no requería una solución más robusta y permite un código más limpio y mantenible para esta aplicación.
  
- **TailwindCSS**: Utilicé TailwindCSS por su flexibilidad, velocidad de desarrollo y capacidad para crear un diseño responsive sin necesidad de escribir CSS personalizado.

- **Estructura por componentes**: Organicé los componentes en carpetas por funcionalidad para facilitar el mantenimiento y escalabilidad del proyecto.

- **LocalStorage**: Para cumplir con el requisito de persistencia sin backend, implementé el almacenamiento local que permite que los datos persistan entre recargas de página.

## Mejoras futuras

- Implementar edición de productos
- Añadir categorías a los productos
- Implementar un tema oscuro
- Añadir tests unitarios y de integración
- Desplegar la aplicación en Vercel o Netlify

## Autor

Tu Nombre