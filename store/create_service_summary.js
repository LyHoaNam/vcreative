export const NAME_STORE = 'create_service_summary';
export const SET_TITLE_SUMMARY = 'SET_TITLE_SUMMARY';
export const GET_TITLE_SUMMARY = 'GET_TITLE_SUMMARY';
export const SET_CATEGORY_SUMMARY = 'SET_CATEGORY_SUMMARY';
export const GET_CATEGORY_SUMMARY = 'GET_CATEGORY_SUMMARY';
export const SET_TYPE_SUMMARY = 'SET_TYPE_SUMMARY';
export const GET_TYPE_SUMMARY = 'GET_TYPE_SUMMARY';
export const SET_FILES_SUMMARY = 'SET_FILES_SUMMARY';
export const GET_FILES_SUMMARY = 'GET_FILES_SUMMARY';
export const SET_KEY_SEARCH_SUMMARY = 'SET_KEY_SEARCH_SUMMARY';
export const GET_KEY_SEARCH_SUMMARY = 'GET_KEY_SEARCH_SUMMARY';
const createServiceSummaryState = () => {
  return {
    title: '',
    category: '',
    type: '',
    files: [],
    keySearch: [],
  };
};
export const state = createServiceSummaryState;
export const getters = {
  [GET_TITLE_SUMMARY]: (state) => state.title,
  [GET_CATEGORY_SUMMARY]: (state) => state.category,
  [GET_TYPE_SUMMARY]: (state) => state.type,
  [GET_FILES_SUMMARY]: (state) => state.files,
  [GET_KEY_SEARCH_SUMMARY]: (state) => state.keySearch,
};
export const mutations = {
  [SET_TITLE_SUMMARY]: (state, payload) => {
    state.title = payload;
  },
  [SET_CATEGORY_SUMMARY]: (state, payload) => {
    state.category = payload;
  },
  [SET_TYPE_SUMMARY]: (state, payload) => {
    state.type = payload;
  },
  [SET_FILES_SUMMARY]: (state, payload) => {
    state.files = payload;
  },
  [SET_KEY_SEARCH_SUMMARY]: (state, payload) => {
    state.keySearch = payload;
  },
};
export const actions = {};
