import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import baseURL from '../../utils/baseURL';
import getToken from '../getToken';

const useGetTaskDetail = (itemId, project) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [loadDetail, setLoadDetail] = useState(false);
  useEffect(() => {
    if (itemId) {
      const getDetail = async () => {
        try {
          setLoadDetail(true);
          const token = await getToken();
          const options = {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token.accessToken}`,
            },
          };
          const response = await fetch(
            `${baseURL}/api/v1/tasks/${project}/${itemId}`,
            options
          );
          if (!response.ok) {
            const message = 'Failed to fetch detail of task ' + itemId;
            toast.error(message);
            throw new Error(message);
          }
          const result = await response.json();
          setSelectedItem(result);
        } catch (err) {
          console.error(err);
          toast.error(err.message);
        } finally {
          setLoadDetail(false);
        }
      };
      getDetail();
    }
  }, [itemId]);
  return [selectedItem, loadDetail];
};

export default useGetTaskDetail;
