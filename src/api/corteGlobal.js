import axios from "./axios";

const ventas = {
    get: (fechaInicial,fechaFinal) => {
      return axios.get('corteGlobal.php?fechaInicial='+fechaInicial+'&fechaFinal='+fechaFinal);
    },
};

export default ventas;