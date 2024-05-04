import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAxiosDoe = (url, page, tipo, nome, raca, porte, sexo, castrado, vacinado, idade, observacoes, coddoador, foto, isAuto) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = async (url, page, tipo, nome, raca, porte, sexo, castrado, vacinado, idade, observacoes, coddoador, foto) => {
    try {
      setLoading(true);
  
      // Construa um objeto FormData para enviar a imagem no corpo da solicitação
      const formData = new FormData();
      formData.append('tipo', tipo);
      formData.append('nome', nome);
      formData.append('raca', raca);
      formData.append('porte', porte);
      formData.append('sexo', sexo);
      formData.append('castrado', castrado);
      formData.append('vacinado', vacinado);
      formData.append('idade', idade);
      formData.append('observacoes', observacoes);
      formData.append('coddoador', coddoador);
      formData.append('file', foto); // Adicione a imagem ao FormData
  
      const response = await axios.post(`${url}${page}`, formData, {
        headers: {
          'Authorization': `Bearer ${await localStorage.getItem('@SideKickAuth:token')}`,
          'Content-Type': 'multipart/form-data', // Define o tipo de conteúdo como multipart/form-data
        },
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
      fetchData(url, page, tipo, nome, raca, porte, sexo, castrado, vacinado, idade, observacoes, coddoador, foto);
  }, [url, page, tipo, nome, raca, porte, sexo, castrado, vacinado, idade, observacoes, coddoador, foto, isAuto]); // execute once only
      
  return { fetch: () => fetchData(url, page, tipo, nome, raca, porte, sexo, castrado, vacinado, idade, observacoes, coddoador, foto), data, error, loading };
};
