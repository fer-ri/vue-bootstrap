import * as types from './mutation-types'

export const navbarDefault = ({ dispatch, state }) => {
  dispatch(types.NAVBAR_DEFAULT)
}

export const navbarInverse = ({ dispatch, state }) => {
  dispatch(types.NAVBAR_INVERSE)
}
