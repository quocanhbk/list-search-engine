import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import baseURL from "../../utils/baseURL";
import getToken from "../getToken";
const useGetAllTasks = (project) => {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const getTasks = async () => {
    if (project) {
      try {
        setLoading(true);
        const token = await getToken();
        const options = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token.accessToken}`
          }
        };
        const url = `${baseURL}/api/v1/tasks/${project}`;
        const response = await fetch(url, options);
        if (!response.ok) {
          const message = `Failed to get tasks from ${project}`;
          toast.error(message);
          throw new Error(message);
        }
        const result = await response.json();
        setTasks(result);
      } catch (err) {
        console.error(err);
        toast.error(err.message);
        setTasks([]);
      } finally {
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    getTasks();
  }, [project]);
  return [loading, tasks];
};

export default useGetAllTasks;
