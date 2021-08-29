export const NAME_STORE = 'create_service_brief';
export const GET_QUES_LIST_COMPONENT = 'GET_QUES_LIST_COMPONENT';
export const SET_QUES_LIST_COMPONENT = 'SET_QUES_LIST_COMPONENT';
export const GET_LS_IN_BASE = 'GET_LS_IN_BASE';
export const SET_LS_IN_BASE = 'SET_LS_IN_BASE';
export const SET_STORE_BASE = 'SET_STORE_BASE';
export const ADD_ITEM_LIST_CPN = 'ADD_ITEM_LIST_CPN';
export const GET_ITEM_LIST_CPN = 'GET_ITEM_LIST_CPN';
export const REMOVE_RECORD_FROM_LS_CMP = 'REMOVE_RECORD_FROM_LS_CMP';
const DEFAULT_BASE = () => {
  return {
    ques: '',
    id: '',
    type: '',
    ls: ['', '', ''],
    mandatory: false,
  };
};
const getCreateServiceBriefState = () => ({
  storeLsCpn: [],
  storeBase: DEFAULT_BASE(),
});
export const state = getCreateServiceBriefState;
export const mutations = {
  [SET_QUES_LIST_COMPONENT]: (state, payload) => {
    state.storeLsCpn = payload;
  },
  [SET_STORE_BASE]: (state, payload) => {
    state.storeBase = payload;
  },
  [SET_LS_IN_BASE]: (state, payload) => {
    state.storeBase = {
      ...state.storeBase,
      ls: [...payload],
    };
  },
};
export const getters = {
  [GET_LS_IN_BASE]: (state) => {
    return state.storeBase.ls;
  },
  [GET_QUES_LIST_COMPONENT]: (state) => state.storeLsCpn,
  [GET_ITEM_LIST_CPN]: (state) => (index) => {
    return state.storeLsCpn[index] || DEFAULT_BASE();
  },
};
export const actions = {
  [ADD_ITEM_LIST_CPN]({ commit, state }, params) {
    const { type, ques, mandatory } = params;
    const id = `${type}-${Math.floor(Math.random())}-${Date.now()}`;
    const newComp = {
      ...state.storeBase,
      type,
      ques,
      mandatory,
      id,
    };
    commit(SET_QUES_LIST_COMPONENT, [...state.storeLsCpn, newComp]);
    commit(SET_STORE_BASE, DEFAULT_BASE());
  },
  [REMOVE_RECORD_FROM_LS_CMP]({ commit, state }, id) {
    const newLs = state.storeLsCpn.filter((record) => record.id !== id);
    commit(SET_QUES_LIST_COMPONENT, [...newLs]);
  },
};
