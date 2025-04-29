// Hero.jsx
const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gray-50">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-amber-100 rounded-full opacity-70 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-200 rounded-full opacity-50 translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/4 right-10 w-16 h-16 bg-amber-300 rounded-full opacity-40"></div>
      <div className="absolute hidden sm:block top-3/4 left-1/4 w-24 h-24 bg-amber-400 rounded-full opacity-30"></div>
      
      <div className="container px-6 mx-auto relative z-10">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="max-w-lg">
            <h1 className="mb-6 text-5xl font-serif font-bold tracking-tight text-gray-900 leading-tight">
              Gestión de Productos
              <span className="block text-amber-700">simple y eficiente</span>
            </h1>
            <p className="mb-8 text-xl text-gray-700">
              Crea, visualiza y gestiona tu inventario de productos de manera sencilla. Organiza tu negocio con una herramienta diseñada para facilitar tu trabajo diario.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#crear-producto" 
                className="px-8 py-3 text-lg font-medium text-white bg-amber-700 rounded-lg hover:bg-amber-800 transition-colors shadow-md hover:shadow-lg"
              >
                Crear producto
              </a>
              <a 
                href="#productos" 
                className="px-8 py-3 text-lg font-medium text-amber-800 bg-white border-2 border-amber-700 rounded-lg hover:bg-amber-50 transition-colors"
              >
                Ver inventario
              </a>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="absolute -top-6 -left-6 w-full h-full bg-amber-300 rounded-lg opacity-30 transform rotate-3"></div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-amber-700 rounded-lg opacity-20 transform -rotate-3"></div>
            <div className="relative bg-white p-8 rounded-lg shadow-lg">
              <div className="aspect-w-4 aspect-h-3 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" 
                  alt="Gestión de inventario" 
                  className="w-full h-full object-cover rounded-md shadow"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-amber-50 p-4 rounded-md border border-amber-100">
                  <div className="flex items-center text-amber-800 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                      <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                    </svg>
                    <span className="font-medium">Productos</span>
                  </div>
                  <p className="text-3xl font-bold text-gray-900">128</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-md border border-amber-100">
                  <div className="flex items-center text-amber-800 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                    <span className="font-medium">Categorías</span>
                  </div>
                  <p className="text-3xl font-bold text-gray-900">12</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;