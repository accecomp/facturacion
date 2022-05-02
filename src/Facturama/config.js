const desarrollo = true;

//url de app en desarrollo
const desarrollo_url = 'https://apisandbox.facturama.mx/';

//url de app en produccion
const produccion_url = 'https://api.facturama.mx/';

const config ={
  app_url: desarrollo ? desarrollo_url : produccion_url,
  valuesFake: {
    user: 'Xicotencatl',
    pass: 'xicofacturama',
  },
};

export default config;