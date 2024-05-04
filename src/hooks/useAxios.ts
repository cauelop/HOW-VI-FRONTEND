import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (url, page, isAuto) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

      const fetchData = async (url, page) => {
        try {
          setLoading(true);

          const response = await axios.get(`${url}${page}`, {
            headers: {
              'Authorization': `Bearer ${await localStorage.getItem('@SideKickAuth:token')}`,
              'Id': `${await localStorage.getItem('@SideKickAuth:id')}`
            }
          });

          setData(response.data);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };
      
      useEffect(() => {
        if (isAuto)
        fetchData(url, page);
      }, [url, page, isAuto]); // execute once only
      
    return { fetch: () => fetchData(url,page), data, error, loading };
};

export default useAxios;
