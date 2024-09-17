// src/components/Filters.jsx
import React, { useState } from 'react';

const Filters = ({ setFilters }) => {
  const [year, setYear] = useState('');
  const [country, setCountry] = useState('');

  const applyFilters = () => {
    setFilters({ year, country });
  };

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <input
        type="text"
        placeholder="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
};

export default Filters;
