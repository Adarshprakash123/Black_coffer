// src/components/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/api';
import IntensityChart from './Charts/IntensityChart';
import Filters from './Filters';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    async function getData() {
      const result = await fetchData(filters);
      setData(result);
    }
    getData();
  }, [filters]);

  return (
    <div className="dashboard">
      <Filters setFilters={setFilters} />
      <IntensityChart data={data} />
    </div>
  );
};

export default Dashboard;
