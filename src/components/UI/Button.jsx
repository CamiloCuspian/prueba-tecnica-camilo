export const Button = ({ children, onClick, variant = 'primary', type = 'button', className = '' }) => {
  const baseStyle = 'px-4 py-2 font-medium transition-colors duration-200 rounded focus:outline-none focus:ring-2';
  
  const variants = {
    primary: 'bg-amber-700 text-white hover:bg-amber-800 focus:ring-amber-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-400',
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};


