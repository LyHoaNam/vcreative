import { listDay, listOptions, HEAD_CHANGE_OPT } from '~/utils/skill.js';
const lsDay = listDay();
const lsOptions = listOptions();
const createServicePriceListState = () => {
  return {
    tablePackage: {
      title: {
        basic: 'special',
        normal: '',
        advanced: '',
      },
      des: {
        basic: '',
        normal: '',
        advanced: '',
      },
    },
    deliveryTable: {
      basic: lsDay[0],
      normal: lsDay[0],
      advanced: lsDay[0],
    },
    numberTable: {
      basic: lsOptions[0],
      normal: lsOptions[0],
      advanced: lsOptions[0],
    },
    filesTable: [],
    changesTable: {
      basic: HEAD_CHANGE_OPT,
      normal: HEAD_CHANGE_OPT,
      advanced: HEAD_CHANGE_OPT,
    },
    priceTable: {
      basic: '',
      normal: '',
      advanced: '',
    },
  };
};
export const state = createServicePriceListState;

// ----------
export const NAME_STORE = 'create_service_price_list';
export const GET_TITLE_TABLE = 'GET_TITLE_TABLE';
export const SET_TITLE_TABLE = 'SET_TITLE_TABLE';
export const GET_DES_TABLE = 'GET_DES_TABLE';
export const SET_DES_TABLE = 'SET_DES_TABLE';
export const ADD_PACKAGE_TABLE = 'ADD_PACKAGE_TABLE';
export const SET_DELIVERY_TABLE = 'SET_DELIVERY_TABLE';
export const GET_DELIVERY_TABLE = 'GET_DELIVERY_TABLE';
export const SET_NUMBER_TABLE = 'SET_NUMBER_TABLE';
export const GET_NUMBER_TABLE = 'GET_NUMBER_TABLE';
export const SET_CHANGE_TABLE = 'SET_CHANGE_TABLE';
export const GET_CHANGE_TABLE = 'GET_CHANGE_TABLE';
export const GET_ORIGINAL_FILE = 'GET_ORIGINAL_FILE';
export const SET_ORIGINAL_FILE = 'SET_ORIGINAL_FILE';
export const GET_PRICE_TABLE = 'GET_PRICE_TABLE';
export const SET_PRICE_TABLE = 'SET_PRICE_TABLE';
export const getters = {
  [GET_TITLE_TABLE]: (state) => (type) => {
    return state.tablePackage.title[type] || '';
  },
  [GET_DES_TABLE]: (state) => (type) => {
    return state.tablePackage.des[type] || '';
  },
  [GET_DELIVERY_TABLE]: (state) => (type) => {
    return state.deliveryTable[type] || {};
  },
  [GET_NUMBER_TABLE]: (state) => (type) => {
    return state.numberTable[type] || {};
  },
  [GET_CHANGE_TABLE]: (state) => (type) => {
    return state.changesTable[type] || {};
  },
  [GET_ORIGINAL_FILE]: (state) => {
    return state.filesTable || [];
  },
  [GET_PRICE_TABLE]: (state) => (type) => {
    return state.priceTable[type] || '';
  },
};
export const mutations = {
  [SET_TITLE_TABLE]: (state, payload) => {
    const { key, value } = payload;
    state.tablePackage = {
      ...state.tablePackage,
      title: {
        ...state.tablePackage.title,
        [key]: value,
      },
    };
  },
  [SET_DES_TABLE]: (state, payload) => {
    const { key, value } = payload;
    state.tablePackage = {
      ...state.tablePackage,
      des: {
        ...state.tablePackage.des,
        [key]: value,
      },
    };
  },
  [SET_DELIVERY_TABLE]: (state, payload) => {
    const { key, value } = payload;
    state.deliveryTable = {
      ...state.deliveryTable,
      [key]: value,
    };
  },
  [SET_NUMBER_TABLE]: (state, payload) => {
    const { key, value } = payload;
    state.numberTable = {
      ...state.numberTable,
      [key]: value,
    };
  },
  [SET_CHANGE_TABLE]: (state, payload) => {
    const { key, value } = payload;
    state.changesTable = {
      ...state.changesTable,
      [key]: value,
    };
  },
  [SET_ORIGINAL_FILE]: (state, payload) => {
    state.filesTable = payload;
  },
  [SET_PRICE_TABLE]: (state, payload) => {
    const { key, value } = payload;
    state.priceTable = {
      ...state.priceTable,
      [key]: value,
    };
  },
};
export const actions = {
  [ADD_PACKAGE_TABLE]({ commit, _ }, params) {
    const { isTitle, key, value } = params;
    const payload = { key, value };
    if (isTitle) {
      commit(SET_TITLE_TABLE, payload);
    } else {
      commit(SET_DES_TABLE, payload);
    }
  },
};
