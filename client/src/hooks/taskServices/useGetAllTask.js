import { useEffect, useState } from 'react';

const useGetAllTasks = () => {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setLoading(true);
    const options = {
      method: 'GET',
    };
    fetch('http://localhost:3600/api/v1/tasks', options)
      .then((res) => res.json())
      .then((result) => {
        setTasks(result.value);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    return () => setLoading(false);
  }, []);
  return [loading, tasks];
};

export default useGetAllTasks;
