import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAxiosUsuarios = (url, page, nome, email, celular, estado, cidade, senha, isAuto) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

      const fetchData = async (url, page, nome, email, celular, estado, cidade, senha) => {

        try {
          setLoading(true);
          const response = await axios.get(`${url}${page}`, {
            headers: {
              'Nome': `${nome}`,
              'Email': `${email}`,
              'Celular': `${celular}`,
              'Estado': `${estado}`,
              'Cidade': `${cidade}`,
              'Senha': `${senha}`,
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
        fetchData(url, page, nome, email, celular, estado, cidade, senha);
      }, [url, page, nome, email, celular, estado, cidade, senha, isAuto]); // execute once only
      
    return { fetch: () => fetchData(url, page, nome, email, celular, estado, cidade, senha), data, error, loading };
};

