import axios from './axios';

const sucursales = {
  Get: (id) => {
    return axios.get('branchOffice/'+id);
  },

  List: () => {
    return axios.get('branchOffice');
  },

  Create: (data) =>{
    return axios.post('branchOffice', data);
  },

  Remove: (id) => {
    return axios.delete('branchOffice/'+id);
  },

  Update: (id, data) => {
    return axios.put('branchOffice/'+id, data);
  },
};

export default sucursales;