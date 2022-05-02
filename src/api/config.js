// TODO: cambiar a env var
const local = true;

// url del servidor local
const local_url = 'http://localhost/modulos';

// url del servidor en produccion
const remote_url = 'http://192.168.30.253';

// path de la api
const api_path = '/facturas';

// path de la carpeta de recursos
const resources_path = '/resources/';

const config = {
    api_url: local ? local_url + api_path : remote_url + api_path,
    resources_url: local ? local_url + resources_path : remote_url + resources_path,
};

export default config;