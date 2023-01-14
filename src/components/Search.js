import React, { Fragment } from 'react';

function Search() {
  return (
    <Fragment>
      <div className='form-group'>
        <input
          type='text'
          className='form-control'
          placeholder='Enter username'
        />
      </div>
    </Fragment>
  );
};

export default Search;