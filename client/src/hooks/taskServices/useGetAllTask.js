import { useEffect, useState } from 'react';

const useGetAllTasks = () => {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const options = {
      method: 'GET',
    };
    fetch('http://172.30.1.213:3600/api/v1/tasks', options)
      .then((res) => res.json())
      .then((result) => {
        setTasks(result);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    return () => setLoading(false);
  }, []);
  return [loading, tasks];
};

export default useGetAllTasks;
