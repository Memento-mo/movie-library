import React, { useState } from 'react';
// import styled from 'styled-components';
import history from '../history';

import '../css/search.css';

const SearchBar = () => {
  const [ input, setInput ] = useState('');
  

  function onFormSubmit(e) {
    e.preventDefault();
    if(input.length === 0) {
      return;
    }
    
    history.push(`${process.env.PUBLIC_URL}/search/${input}`);

    setInput('')
  }
  const inputChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <form type="submit" onSubmit={onFormSubmit}>
      <div className="container">
        <input 
          type="text" 
          placeholder="Search..."
          value={input} 
          onChange={inputChange}
          />
        <div className="search"></div>
      </div>
    </form>
  )
}

export default SearchBar
