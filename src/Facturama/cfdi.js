import axios from './axios';

const cfdi = {
  Get: (id) => {
    return axios.get('cfdi/'+id);
  },

  List: () => {
    return axios.get('cfdi');
  },

  Create: (data) =>{
    return axios.post('2/cfdi', data);
  },

  Create3: (data) => {
    return axios.post('3/cfdi', data);
  }
};

export default cfdi;