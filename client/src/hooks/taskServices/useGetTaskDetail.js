import { useEffect, useState } from 'react';
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
            throw new Error('Failed to fetch detail of task ' + itemId);
          }
          const result = await response.json();
          setSelectedItem(result);
        } catch (err) {
          console.error(err);
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
