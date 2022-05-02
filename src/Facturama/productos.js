import axios from './axios';

const productos = {
  Get: (id) => {
    return axios.get('Product/'+id);
  },

  List: () => {
    return axios.get('Product');
  },

  Create: (data) =>{
    return axios.post('Product', data);
  },

  Remove: (id) => {
    return axios.delete('Product/'+id);
  },

  Update: (id, data) => {
    return axios.put('Product/'+id, data);
  },
};

export default productos;