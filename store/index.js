export const state = () => ({
  ModalOpen: false,
  ModalInfo: {},
  page: 1,
  loading: false,
  lastPage: false,
  favoriteMovies: 0,
});

export const getters = {
  ModalOpen(state) {
    return state.ModalOpen;
  },
  ModalInfo(state) {
    return state.ModalInfo;
  },
  page(state) {
    return state.page;
  },
  loading(state) {
    return state.loading;
  },
  lastPage(state) {
    return state.lastPage;
  },
  favoriteMovies(state) {
    return state.favoriteMovies;
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
  page(state, page) {
    state.page = page;
  },
  loading(state, loading) {
    state.loading = loading;
  },
  lastPage(state, lastPage) {
    state.lastPage = lastPage;
  },
  favoriteMovies(state, favoriteMovies) {
    state.favoriteMovies = favoriteMovies;
  },
};
