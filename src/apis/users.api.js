import axios from 'axios';
const API = 'https://randomuser.me/api';

export const getUsers = async (params) => {
    let configs = {
      url: `${API}`,
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        // Authorization: `Bearer ${TOKEN}`
      },
      params
    };
  
    let response = await axios(configs);
    return response;
  };