import { useState, useEffect } from 'react';
import { baseURL } from './baseURl';

const useGetPersonalPerformance = (project, email) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      if (email) {
        setLoading(true);
        const url = `${baseURL}/performance/${project}/${email}`;
        const options = {
          method: 'GET',
        };
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${email} performance from ${project}`);
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  };
  useEffect(() => {
    fetchData()
  }, [email]);
  return [data, loading]
};

export { useGetPersonalPerformance }