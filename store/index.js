export const state = () => ({
  ModalOpen: false,
  ModalInfo: {},
});

export const getters = {
  ModalOpen(state) {
    return state.ModalOpen;
  },
  ModalInfo(state) {
    console.log(state);
    return state.ModalInfo;
  },
};

export const actions = () => ({});

export const mutations = {
  setModalOpen(state, value) {
    state.ModalOpen = value;
  },
  ModalInfo(state, movie) {
    state.ModalInfo = movie;
  },
};
