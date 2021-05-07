

import { useState, useEffect } from 'react';
import { baseURL } from './baseURl';

const useGetProjectAssignees = (project) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      const url = `${baseURL}/tasks/${project}/assignees`;
      const options = {
        method: 'GET',
      };
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${project} assignees`);
      }
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  };
  useEffect(() => {
    fetchData()
  }, []);
  return [data, loading]
};

export default useGetProjectAssignees;