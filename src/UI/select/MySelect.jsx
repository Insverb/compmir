const MySelect = ({ handleSortChange }) => {
    return (
      <div className="flex items-center">
        <label className="whitespace-nowrap pr-2" htmlFor="sort">Sort prices by:</label>
        <select
          className="bg-[#1d1d1d] border border-gray-300 text-white text-sm rounded-full focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 "
          id="sort"
          onChange={(e) => handleSortChange(e.target.value)}
        >
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>
    );
  };
  
  export default MySelect;