import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAxiosCadastroEspecie = (url, page, nome, habitat_natural, expectativa_vida, isAuto) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = async (url, page, nome, habitat_natural, expectativa_vida) => {
    try {
      setLoading(true);

      console.log('axios:'+nome+'-'+habitat_natural+'-'+expectativa_vida);
      
      const response = await axios.post(`${url}${page}`, {
        nome,
        habitat_natural,
        expectativa_vida
      }, {
        headers: {
          'Authorization': `Bearer ${await localStorage.getItem('@SideKickAuth:token')}`
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
      fetchData(url, page, nome, habitat_natural, expectativa_vida);
  }, [url, page, nome, habitat_natural, expectativa_vida, isAuto]);
      
  return { fetch: () => fetchData(url, page, nome, habitat_natural, expectativa_vida), data, error, loading };
};
