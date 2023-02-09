const LoadingSpinner = () => {
  return (
    <div className="flex justify-center h-screen">
      <div
        className="w-20 h-20 p-4 bg-transparent border-4 border-gray-200 rounded-full 
      border-t-green-400 dark:border-t-blue-500 mt-20 animate-spin "
      />
    </div>
  );
};

export default LoadingSpinner;
