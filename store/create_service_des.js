const createServiceDes = () => {
  return {
    valueDes: '',
  };
};
export const state = createServiceDes;

// -----------
export const NAME_STORE = 'create_service_des';
export const GET_DESCRIPTION_SV = 'GET_DESCRIPTION_SV';
export const SET_DESCRIPTION_SV = 'SET_DESCRIPTION_SV';
export const getters = {
  [GET_DESCRIPTION_SV]: (state) => {
    return state.valueDes || '';
  },
};
export const mutations = {
  [SET_DESCRIPTION_SV]: (state, payload) => {
    state.valueDes = payload;
  },
};
