import React, {useState} from 'react';
import { IoIosSearch } from 'react-icons/io';

import './SearchBar.css';

function SearchBar(){

  const [searchValue ,setSearchValue] = useState('');

  return (
    <form className="search-bar">
      <input type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        className="search_input" 
        onChange= {({target}) => setSearchValue(target.value)}
        required
      />
  
      <button type="submit" className="search_button">
        <IoIosSearch/>
      </button>
    </form> 
  );

}
export default SearchBar;
