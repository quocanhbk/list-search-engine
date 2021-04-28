import { useEffect, useState } from 'react';
import sampleData from '../../sampleData'
const useGetAllTasks = () => {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const options = {
      method: 'GET',
      
    };
    fetch('http://172.30.1.213:3600/api/v1/tasks/m04', options)
      .then((res) => res.json())
      .then((result) => {
        setTasks(result);
        setLoading(false);
      })
      .catch(() => {
        setTasks(sampleData)
        setLoading(false)
      });
    return () => setLoading(false);
  }, []);
  return [loading, tasks];
};

export default useGetAllTasks;
