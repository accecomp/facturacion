import axios from './axios';

const clientes = {
  Get: (id) => {
    return axios.get('Client/'+id);
  },

  List: () => {
    return axios.get('Client');
  },

  Create: (data) =>{
    return axios.post('Client', data);
  },

  Remove: (id) => {
    return axios.delete('Client/'+id);
  },

  Update: (id, data) => {
    return axios.put('Client/'+id, data);
  },
};

export default clientes;