import { useState, useEffect } from 'react';
import { baseURL } from './baseURl';

const useGetProjectPerformance = (project) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      const url = `${baseURL}/performance/${project}`;
      const options = {
        method: 'GET',
      };
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${project} performance`);
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

const useGetProjectPerformanceByDate = (project, from, to) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      const url = `${baseURL}/performance/${project}?from=${from}&to=${to}`;
      const options = {
        method: 'GET',
      };
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${project} performance`);
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

export {useGetProjectPerformance , useGetProjectPerformanceByDate};
