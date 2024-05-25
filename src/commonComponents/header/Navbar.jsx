import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import category from './Categorydata.json';

const CategoryItem = ({ category, parentPath = '' }) => {
  const [expanded, setExpanded] = useState(false);
  const currentPath = `${parentPath}/${category.name.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <li className="list-none">
      <a
        href={currentPath}
        className=""
        onClick={(e) => {
          e.preventDefault();
          setExpanded(!expanded);
        }}
      >
        {category.name}
      </a>
      {expanded && category.subcategories && (
        <ul className="">
          {category.subcategories.map((subcategory, index) => (
            <div key={index}>
              <CategoryItem category={subcategory} parentPath={currentPath} />
            </div>
          ))}
        </ul>
      )}
    </li>
  );
};

function Navbar() {
  return (
    <div className="shadow-md mt-5 relative">
      <div className="custom-container flex justify-between font-medium h-14 sticky top-0 ">
        {category.map((category, index) => (
          <div className="z-10 flex" key={index}>
            <CategoryItem category={category} /> <MdKeyboardArrowDown className="mt-1 cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
