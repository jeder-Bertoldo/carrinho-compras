import React, {useState, useContext} from 'react';
import { IoIosSearch } from 'react-icons/io';

import './SearchBar.css';
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';

function SearchBar(){
  
  const {setProducts} = useContext(AppContext);
  const [searchValue ,setSearchValue] = useState('');



  const handleSearch = async (event) => {
    event.preventDefault();

    const products = await fetchProducts(searchValue);

    setProducts(products);
    setSearchValue('');
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      {name}
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
