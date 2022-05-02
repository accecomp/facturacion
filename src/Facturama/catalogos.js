import axios from "./axios";

const catalogos = {
  Paises: () => {
    return axios.get('catalogs/Countries');
  },

  Estados: (pais) => {
    return axios.get('catalogs/states?countryCode='+pais);
  },

  Municipios: (estado) => {
    return axios.get('catalogs/municipalities?stateCode='+estado)
  },

  Vecindarios: (codigoPostal) => {
    return axios.get('catalogs/neighborhoods?postalCode='+codigoPostal);
  },

  ProductosOServicios: (productoOservicio) => {
    return axios.get('catalogs/ProductsOrServices?keyword='+productoOservicio);
  },

  Unidades: () => {
    return axios.get('catalogs/Units');
  },

  Monedas: () => {
    return axios.get('catalogs/Currencies');
  },

  FormasPago: () => {
    return axios.get('catalogs/PaymentForms');
  },

  MetodosPago: () => {
    return axios.get('catalogs/PaymentMethods');
  },

  Impuestos: () => {
    return axios.get('catalogs/FederalTaxes');
  },

  RegimenesFiscales: () => {
    return axios.get('catalogs/FiscalRegimens');
  },

  TiposCfdi: () => {
    return axios.get('catalogs/CfdiTypes');
  },

  TiposRelaciones: () => {
    return axios.get('catalogs/RelationTypes');
  },

  UsosCfdi: () => {
    return axios.get('catalogs/CfdiUses');
  },
};

export default catalogos;