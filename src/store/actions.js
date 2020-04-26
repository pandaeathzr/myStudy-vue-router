export default {
  asyncChangeA ({ commit }, params) {
    setTimeout(() => {
      commit('changeA', 'asyncChangeA!' + params)
    },1000)
  },
  asyncChangeB ({ commit }, params) {
    setTimeout(() => {
      commit('changeB', 'asyncChangeB!' + params)
    },1000)
  },
  asyncChangeC ({ commit }, params) {
    setTimeout(() => {
      commit('changeC', 'asyncChangeC!' + params)
    },1000)
  },
}
