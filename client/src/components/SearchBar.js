import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className='card mb-4'>
      <div className='card-header'>Search</div>
      <div className='card-body'>
        <div className='input-group'>
          <input
            className='form-control'
            type='text'
            placeholder='Enter search term...'
            aria-label='Enter search term...'
            aria-describedby='button-search'
            value={searchTerm}
            onChange={handleChange}
          />
          <button className='btn btn-primary' id='button-search' type='button' onClick={handleSearch}>
            Go!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
