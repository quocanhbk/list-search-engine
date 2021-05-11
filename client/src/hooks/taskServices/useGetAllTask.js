import { useEffect, useState } from "react";

import baseURL from "../../utils/baseURL";
import getToken from "../getToken";
const useGetAllTasks = (project) => {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const getTasks = async () => {
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
        throw new Error("Failed to fetch tasks from " + project);
      }
      const result = await response.json();
      setTasks(result);
    } catch (err) {
      console.error(err);
      setTasks([]);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getTasks();
  }, [project]);
  return [loading, tasks];
};

export default useGetAllTasks;
