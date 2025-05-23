export const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-white p-6 rounded-md shadow-sm ${className}`}>
      {children}
    </div>
  );
};