import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAxiosResgate = (url, page, tipo, caracteristicas, motivo, estado, cidade, rua, ponto_referencia, urgencia, codusuario, isAuto) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = async (url, page, tipo, caracteristicas, motivo, estado, cidade, rua, ponto_referencia, urgencia, codusuario) => {
    try {
      setLoading(true);

      console.log('axios:'+tipo+'-'+caracteristicas+'-'+motivo+'-'+estado+'-'+cidade+'-'+rua+'-'+ponto_referencia+'-'+urgencia+'-'+codusuario)
      
      const response = await axios.post(`${url}${page}`, {
        tipo: tipo,
        caracteristicas: caracteristicas,
        motivo: motivo,
        estado: estado,
        cidade: cidade,
        rua: rua,
        ponto_referencia: ponto_referencia,
        urgencia: urgencia,
        codusuario: codusuario
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
      fetchData(url, page, tipo, caracteristicas, motivo, estado, cidade, rua, ponto_referencia, urgencia, codusuario);
  }, [url, page, tipo, caracteristicas, motivo, estado, cidade, rua, ponto_referencia, urgencia, codusuario, isAuto]); // execute once only
      
  return { fetch: () => fetchData(url, page, tipo, caracteristicas, motivo, estado, cidade, rua, ponto_referencia, urgencia, codusuario), data, error, loading };
};

