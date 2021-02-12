import games from '../data'
import { CHANGE_MODAL_SLIDE } from './types'


const initialState = {
  isModalSlideActive: false,
  currentModalSlide: null,
  games: games
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MODAL_SLIDE:
      return {
        ...state,
        currentModalSlide: action.payload,
        isModalSlideActive: !state.isModalSlideActive
      }
    default:
      return state
  }
}

export default reducer
