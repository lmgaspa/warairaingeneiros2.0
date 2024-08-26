"use client"
import React, { useState } from 'react';

interface FilterMenuProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const FilterMenu: React.FC<FilterMenuProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelectCategory = (category: string) => {
    onSelectCategory(category);
    setIsDropdownOpen(false);
  };

  return (
    <div className="mb-8">
      <div className="hidden lg:flex justify-center space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-2 rounded ${
              selectedCategory === category ? 'bg-yellow-500 text-white hover:bg-blue-500 transition duration-300' : 'bg-gray-200 text-gray-700 hover:bg-blue-500 transition duration-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex lg:hidden justify-center">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="px-4 py-2 w-60 bg-blue-500 text-gray-700 rounded hover:bg-blue-500 transition duration-300 cursor-pointer"
        >
          Filtrar por categoría
        </button>
      </div>

      {isDropdownOpen && (
        <div className="mt-2 lg:hidden flex flex-col items-center space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleSelectCategory(category)}
              className={`px-4 py-2 rounded w-60 text-center ${
                selectedCategory === category ? 'bg-yellow-500 text-white cursor-pointer' : 'bg-gray-200 text-gray-700 cursor-pointer'
              } cursor-pointer`}
            >
              {category}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterMenu;