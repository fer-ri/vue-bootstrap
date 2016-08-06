import {
  NAVBAR_DEFAULT,
  NAVBAR_INVERSE
} from '../mutation-types'

const localStorage = window.localStorage

const state = {
  inverse: false
}

const mutations = {
  [NAVBAR_DEFAULT] (state) {
    state.inverse = false

    localStorage.setItem('navbar_inverse', state.inverse)
  },

  [NAVBAR_INVERSE] (state) {
    state.inverse = true

    localStorage.setItem('navbar_inverse', state.inverse)
  }
}

export default {
  state,
  mutations
}
