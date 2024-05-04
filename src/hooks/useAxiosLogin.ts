import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxiosLogin = (url, username, password, isAuto) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loginInfo, setLoginInfo] = useState({ token: null, nome: null, celular: null, email: null, estado: null, cidade: null, id: null });

      const fetchData = async (url, username, password) => {
        try {
          setLoading(true);

          // LOGIN -----------------------------------------------------------------

          const loginResponse = await axios.post(`${url}/login`, {}, {
            headers: {
              'username': `${username}`,
              'password': `${password}`
            }
          });

          const id = loginResponse.data.id;
          const token = loginResponse.data.token;
          const nome = loginResponse.data.nome;
          const celular = loginResponse.data.celular;
          const estado = loginResponse.data.estado;
          const cidade = loginResponse.data.cidade;
          const email = username;

          //console.log('auth: '+token+' - '+nome+' - '+celular+' - '+email+' - '+estado+' - '+cidade+' - '+id)

          setLoginInfo({ token, nome, celular, email, estado, cidade, id });

          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };
      
      useEffect(() => {
        if (isAuto)
        fetchData(url, username, password);
      }, [url, username, password, isAuto]); // execute once only
      
    return { fetch: () => fetchData(url, username, password), loginInfo, error, loading };
};

export default useAxiosLogin;
