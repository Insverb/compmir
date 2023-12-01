const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage}) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex justify-center gap-5 mb-5">
        {pageNumbers.map(number => (
          <button className={`px-4 py-2 border rounded-full ${number === currentPage ? 'bg-violet-800 text-white' : ''}`} key={number} onClick={() => paginate(number)}>
            {number}
          </button>
        ))}
      </div>
    );
  };

  export default Pagination