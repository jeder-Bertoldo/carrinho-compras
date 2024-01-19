import React from 'react';
import { IoIosSearch } from 'react-icons/io';

function SearchBar(){
  return(
    <form>
      <input type="search" placeholder="Buscar produtos"
        className="search_input" 
        required
      />
      <button type="submit" className="search_button">
        <IoIosSearch/>
      </button>
    </form> 
  );

}
export default SearchBar;
