import { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={searchRef} className="relative ">
      <button
        className="text-gray-300 hover:text-gray-700 focus:outline-none focus:text-gray-700"
        onClick={toggleSearch}
      >
        <FaSearch className="text-xl text-gray-500" />
      </button>
      {isOpen && (
        <div className="absolute md:-top-16 md:right-8 top-0 right-0 mt-12 sm:w-80 w-44 bg-gray-900 rounded-full">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-200 px-6 py-4 border-b text-black text-xl md:rounded-lg focus:outline-none"
          />
        </div>
      )}
    </div>
  );
};

export default Search;
