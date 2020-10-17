import axios from 'axios';

export const postMessage = (message) => {
  return axios.post(`/api/messages`, message)
};
