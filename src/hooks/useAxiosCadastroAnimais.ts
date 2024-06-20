import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAxiosCadastroAnimais = (url, page, especie, nome, porte, observacoes, foto, isAuto) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = async (url, page, especie, nome, porte, observacoes, foto) => {
    try {
      setLoading(true);
  
      // Construa um objeto FormData para enviar a imagem no corpo da solicitação
      const formData = new FormData();
      formData.append('especie', especie);
      formData.append('nome', nome);
      formData.append('porte', porte);
      formData.append('observacoes', observacoes);
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
      fetchData(url, page, especie, nome, porte, observacoes, foto);
  }, [url, page, especie, nome, porte, observacoes, foto, isAuto]); // execute once only
      
  return { fetch: () => fetchData(url, page, especie, nome, porte, observacoes, foto), data, error, loading };
};
