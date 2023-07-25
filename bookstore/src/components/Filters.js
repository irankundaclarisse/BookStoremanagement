import React from 'react';

const Filters = ({ applyFilters }) => {
  return (
    <div className='mt-4 mx-10'>
      <input type="text" className='py-1 mx-5' style={{border:0}} placeholder='Search book by title...' id="titleFilter" onChange={(e) => applyFilters('title', e.target.value)} />
      {/* Add filters for other attributes as needed */}
    </div>
  );
};

export default Filters;
